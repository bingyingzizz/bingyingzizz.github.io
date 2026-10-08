# 单位与余单位　`def.adjunction-unit`
单位与余单位（Unit and Counit）
layer 10 · 定义 · 伴随与反射 · 范畴论

设 $F \dashv G$，记那个自然同构为

$$\Phi_{X, Y} : \operatorname{Hom}_{\mathcal{D}}\bigl(F(X), Y\bigr) \longrightarrow \operatorname{Hom}_{\mathcal{C}}\bigl(X, G(Y)\bigr)$$

把它在两个「恒等态射」上取值，得到两个自然变换：

$$\eta_{X} := \Phi_{X, F(X)}(1_{F(X)}) : X \to G F(X) \qquad (\textbf{单位})$$

$$\varepsilon_{Y} := \Phi_{G(Y), Y}^{-1}(1_{G(Y)}) : F G(Y) \to Y \qquad (\textbf{余单位})$$

它们满足**三角等式**
> 陈述续见 `nodes/def.adjunction-unit.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-unit.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-unit.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.adjoint-full-faithful` 全忠实与单位
- 被 `prop.adjoint-full-faithful` 全忠实与单位 用

> 说明见 `notes/def.adjunction-unit.md`
