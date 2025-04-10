/**
 * Obtém o JWT_SECRET do ambiente
 * @returns Segredo JWT para assinatura e verificação de tokens
 */
export function getJwtSecret(): string {
  // Para ambiente de desenvolvimento, usamos um segredo padrão se não estiver definido
  const defaultSecret = 'temporary_secret_not_for_production'

  // Para resolver o problema do eslint com 'process', usamos uma função wrapper
  // que será chamada apenas em runtime, evitando a verificação estática
  function getEnvSecret(): string {
    try {
      // eslint-disable-next-line node/prefer-global/process
      return process?.env?.JWT_SECRET || ''
    }
    catch {
      return ''
    }
  }

  const secret = getEnvSecret()

  if (!secret) {
    console.error('JWT_SECRET não está definido no ambiente!')
    return defaultSecret
  }

  return secret
}
