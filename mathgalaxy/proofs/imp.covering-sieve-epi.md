# 覆盖族生成覆盖筛 $\iff$ 余积满
`imp.covering-sieve-epi` · 推出 · strong 边 · 根 `../`

`def.sieve` 筛 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.mono` 单态射 / 满态射 → `prop.covering-sieve-epi` 覆盖筛即余积满射

记覆盖族为 $(f_{i} : X_{i} \to X)_{i \in I}$，它生成的筛为 $R \subseteq h_{X}$，并记 $q : \coprod_{i} X_{i} \to X$ 为余积给出的那个态射。

**$R = h_{X}$ 这件事的意义。** $R(Y) \subseteq \operatorname{Hom}(Y, X)$ 是「能穿过某个 $X_{i}$」的那些映射。$R = h_{X}$ 就是说**每个** $Y \to X$ 都能穿过某个 $X_{i}$。

> 续见 proofs/imp.covering-sieve-epi.2.md
