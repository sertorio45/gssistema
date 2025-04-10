/**
 * Verifica se o ambiente atual é de produção
 * @returns true se estiver em produção, false caso contrário
 */
export function isProduction(): boolean {
  try {
    // eslint-disable-next-line node/prefer-global/process
    const isProductionEnv = process?.env?.NODE_ENV === 'production'
    return isProductionEnv
  }
  catch {
    return false
  }
}
