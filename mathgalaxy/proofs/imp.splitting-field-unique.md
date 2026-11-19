# imp.splitting-field-unique
`imp.splitting-field-unique` · 推出 · strong 边 · 根 `../`

`thm.splitting-field-exists` 分裂域存在 + `lem.isomorphism-extension` 同构延拓 + `def.splitting-field` 分裂域 + `def.field-extension` 域扩张 → `thm.splitting-field-unique` 分裂域唯一

证明：设 $\sigma:F\to F'$，对 $n=\deg f$ 归纳证明 $\sigma$ 可延拓为 $K\to K'$。若 $f$ 在 $F$ 上分裂，则 $K=F$（根都在 $F$ 且由根生成），同理 $K'=F'$，取 $\sigma$。否则取 $f$ 的次数 $\ge2$ 的不可约因子 $g$，设 $\alpha$ 是 $g$ 在 $K$ 中的根；因 $g^{\sigma}\mid f^{\sigma}$ 且 $f^{\sigma}$ 在 $K'$ 分裂，取 $g^{\sigma}$ 在 $K'$ 中的根 $\alpha'$。由 `lem.isomorphism-extension`，$\sigma$ 延拓为 $\sigma_1:F(\alpha)\to F'(\alpha')$，$\sigma_1(\alpha)=\alpha'$。在 $F(\alpha)[x]$ 中 $f=(x-\alpha)h$，$\deg h=n-1$；则 $f^{\sigma}=(x-\alpha')h^{\sigma_1}$，且 $K$ 是 $h$ 在 $F(\alpha)$ 上的分裂域、$K'$ 是 $h^{\si

> 续见 proofs/imp.splitting-field-unique.2.md
