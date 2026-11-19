# imp.abelianization
`imp.abelianization` · 推出 · strong 边 · 根 `../`

`def.commutator-subgroup` 换位子群 + `def.quotient-group` 商群 + `def.group-hom` 群同态、核与像 → `prop.abelianization` 交换化

换位子 $ghg^{-1}h^{-1}$ 被送到 $\varphi(g)\varphi(h)\varphi(g)^{-1}\varphi(h)^{-1} = e$（交换性！），故 $[G,G] \subseteq \ker\varphi$，于是 $\varphi$ 唯一地穿过商 $G\twoheadrightarrow G^{\mathrm{ab}}$ ✓。
- **反向**是 $G\to G^{\mathrm{ab}}$ 与函数的复合 ✓，且两个方向互逆（在 $G^{\mathrm{ab}}$ 上验一次、在 $\operatorname{Hom}(G,A)$ 上验一次）✓。
- **自然性**对 $G$ 与 $A$ 都逐项验证（$G\to G'$ 的像把 $[G,G]$ 送进 $[G',G']$，故诱导 $G^{\mathrm{ab}}\to G'^{\mathrm{ab}}$）✓。∎

> 换位子被送到单位元，万有性质给出自然双射。
