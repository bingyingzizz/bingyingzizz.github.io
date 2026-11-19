# imp.galois-correspondence
`imp.galois-correspondence` · 推出 · strong 边 · 根 `../`

`def.galois-extension` 伽罗瓦扩张 + `def.galois-group` 伽罗瓦群 + `def.fixed-field` 不动域 + `def.separable-extension` 可分扩张 + `def.normal-subgroup` 正规子群 + `thm.lagrange` Lagrange 定理 → `thm.galois-correspondence` 伽罗瓦基本定理

**正规性**。$E/F$ 正规 $\iff$ 对每个 $\sigma\in G$ 有 $\sigma(E)=E$。理由：若 $E/F$ 正规、$\sigma\in G$，则 $\sigma|_{E}$ 是 $E$ 到代数闭包里的 $F$-嵌入，正规性迫使 $\sigma(E)\subseteq E$，次数相同故相等；反之若 $\sigma(E)=E$ 对一切 $\sigma$，则 $E$ 中元素的每个共轭仍在 $E$，故 $E/F$ 正规。又 $\operatorname{Gal}(K/\sigma(E))=\sigma\operatorname{Gal}(K/E)\sigma^{-1},$ 于是 $\operatorname{Gal}(K/E)\trianglelefteq G \iff \operatorname{Gal}(K/\sigma(E))=\operatorname{Gal}(K/E)\ \text{对一切}\ \sigma \iff \sigma(E)=E\ \text{对一切}\ \sigma 

> 续见 proofs/imp.galois-correspondence.12.md
