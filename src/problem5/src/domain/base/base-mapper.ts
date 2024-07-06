export abstract class BaseMapper<I, O> {
  abstract fromDomain(domain: I): O;
  abstract toDomain(external: O): I;
  abstract fromDomains(domains: I[]): O[];
  abstract toDomains(externals: O[]): I[];
}
