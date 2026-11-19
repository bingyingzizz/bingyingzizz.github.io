# imp.isomorphism-extension
`imp.isomorphism-extension` · 推出 · strong 边 · 根 `../`

`def.field-extension` 域扩张 + `def.irreducible-poly` 不可约多项式 + `def.quotient-ring` 商环 + `def.polynomial-ring` 多项式环 → `lem.isomorphism-extension` 同构延拓

证明：由 $\sigma$ 诱导环同构 $\Phi:F[x]\to F'[x]$，$h\mapsto h^{\sigma}$。因 $p$ 不可约、$\Phi$ 保次数，$p^{\sigma}$ 不可约。又 $p$ 是求值核 $\ker(\operatorname{ev}_{\alpha}:F[x]\to L)$ 的生成元（$p$ 不可约且 $p(\alpha)=0$），故 $\Phi((p))=(p^{\sigma})=\ker(\operatorname{ev}_{\alpha'})$。于是 $\Phi$ 下降为域同构 $\bar\Phi:F[x]/(p)\to F'[x]/(p^{\sigma})$。由第一同构定理，$\operatorname{ev}_{\alpha}$、$\operatorname{ev}_{\alpha'}$ 分别诱导 $F[x]/(p)\cong F(\alpha)$、$F'[x]/(p^{\sigma})\cong F'(\alpha')$；复合得到 $\tilde\sigma:F(\alpha)\to F'(\alpha')$，且 $\tilde\sigma|_F=\sigma$、$\

> 续见 proofs/imp.isomorphism-extension.2.md
