# 全忠实与单位　`prop.adjoint-full-faithful`
全忠实 $\iff$ 单位（余单位）是同构
layer 11 · 命题 · 伴随与反射 · 范畴论

设 $F \dashv G$，单位 $\eta$、余单位 $\varepsilon$。则

$$F \text{ 全忠实} \iff \eta \text{ 是同构}, \qquad G \text{ 全忠实} \iff \varepsilon \text{ 是同构}$$

## 为什么成立（入边，证明在 proofs/）
- `def.adjunction-unit` 单位与余单位 + `def.ff-faithful` 忠实 / 满 / 全忠实：单位同构 $\implies$ 左伴随全忠实　proofs/imp.adjoint-ff.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-ff.md
- `def.ff-faithful` 忠实 / 满 / 全忠实：用到了定义 忠实 / 满 / 全忠实　proofs/def-dep.ff-adjoint.md
- `def.adjunction-unit` 单位与余单位：用到了定义 单位与余单位　proofs/def-dep.unit-adjoint-ff.md

> 说明见 `notes/prop.adjoint-full-faithful.md`
