# 伽罗瓦基本定理　`thm.galois-correspondence`　·　说明
根 `../`

**正规性**。$E/F$ 正规 $\iff$ 对每个 $\sigma\in G$ 有 $\sigma(E)=E$。理由：若 $E/F$ 正规、$\sigma\in G$，则 $\sigma|_{E}$ 是 $E$ 到代数闭包里的 $F$-嵌入，正规性迫使 $\sigma(E)\subseteq E$，次数相同故相等；反之若 $\sigma(E)=E$ 对一切 $\sigma$，则 $E$ 中元素的每个共轭仍在 $E$，故 $E/F$ 正规。又 $\operatorname{Gal}(K/\sigma(E))=\sigma\operatorname{Gal}(K/E)\sigma^{-1},$ 于是 $\operatorname{Gal}(K/E)\trianglelefteq G \iff \operatorname{Gal}(K/\sigma(E))=\operatorname{Gal}(K/E)\ \text{对一切}\ \sigma \iff \sigma(E)=E\ \text{对一切}\ \sigma \iff E/F\ \text{正规},$ 中间一步用双射的单射性。最后，限制映射 $G\to\operatorname{Gal}(E/F)$ 是满射（$E/F$ 正规，$E$ 的 $F$-自同构可延拓到 $K$），核为 $\operatorname{Gal}(K/E)$，故 $\operatorname{Gal}(E/F)\cong G/\operatorname{Gal}(K/E)$。∎

> 续见 notes/thm.galois-correspondence.8.md
