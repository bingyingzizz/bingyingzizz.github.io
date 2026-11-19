# imp.continuous-hom-condensed
`imp.continuous-hom-condensed` · 推出 · strong 边 · 根 `../`

`def.condensed-abelian-group` 凝聚态阿贝尔群 + `def.topo-ab-group` 拓扑阿贝尔群 + `def.internal-hom` 内 Hom + `prop.abtop-to-abcond` 拓扑阿贝尔群嵌入凝聚态 → `prop.continuous-hom-condensed` 连续同态与内部 Hom

**证明。** 记左边的凝聚态阿贝尔群为 $S \mapsto C(S, C_{\mathbb{Z}}(M,N))$。对紧 Hausdorff 的 $S$，两边逐项算：
- 右边：
$$\operatorname{Hom}_{\mathbb{Z}}(\underline{M},\underline{N})(S) = \operatorname{Hom}\bigl(S, \operatorname{Hom}_{\mathbb{Z}}(\underline{M},\underline{N})\bigr) = \operatorname{Hom}_{\mathbb{Z}}\bigl(\underline{M},\ \operatorname{Hom}(S, \underline{N})\bigr) = \operatorname{Hom}_{\mathbb{Z}}\bigl(\underline{M},\ C(S, N)\bigr) = C_{\mathbb{Z}}\bigl(M,\ C(S,N)\bigr),$$
第二步是 $(S, -)$ 与内部 Hom 的伴随，最后一步用「$M$ 紧生成时 $\underline{M}$ 是全忠实嵌入」

> 续见 proofs/imp.continuous-hom-condensed.2.md
