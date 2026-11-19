# imp.ext-abelian-groups
`imp.ext-abelian-groups` · 推出 · strong 边 · 根 `../`

`def.ext` 扩展群 Ext + `def.enough-projectives` 足够多投射对象 + `def.category-of-abelian-groups` 阿贝尔群范畴 + `def.pid` 主理想整环 → `prop.ext-abelian-groups` 阿贝尔群的 Ext

}}(-, N)$ 得长正合列
$$0 \to \operatorname{Hom}(\mathbb{Z}/k, N) \to \operatorname{Hom}(\mathbb{Z}, N) \xrightarrow{\ (\times k)^{*}\ } \operatorname{Hom}(\mathbb{Z}, N) \to \operatorname{Ext}^{1}(\mathbb{Z}/k, N) \to \underbrace{\operatorname{Ext}^{1}(\mathbb{Z}, N)}_{=\,0} \to \cdots$$
其中 $\operatorname{Hom}(\mathbb{Z}, N) \cong N$、$(\times k)^{*}$ 就是「乘 $k$」这个自同态 ✓（$\operatorname{Ext}^{1}(\mathbb{Z}, N) = 0$ 因为 $\mathbb{Z}$ 投射）。于是
$$\operatorname{Hom}(\mathbb{Z}/k, N) = \ker(\times k) = N[k], \qquad \operatorname{Ext}^{1}(\mathbb{Z}/k, N) = \operatorname{coker}

> 续见 proofs/imp.ext-abelian-groups.4.md
