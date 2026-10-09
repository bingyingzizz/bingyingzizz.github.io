# 反射子范畴　`def.reflective-subcategory`
反射子范畴（Reflective Subcategory）
layer 10 · 定义 · 伴随与反射 · 范畴论

满子范畴 $\mathcal{C}' \subseteq \mathcal{C}$ 叫**反射的**，如果含入函子 $\mathcal{C}' \hookrightarrow \mathcal{C}$ 有左伴随；这个左伴随叫**反射**。对偶的说法是**余反射的**。

函子 $F : \mathcal{C} \to \mathcal{C}'$ 是反射 $\iff$

$$\operatorname{Hom}_{\mathcal{C}}\bigl(F(X),\ X'\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}}\bigl(X,\ X'\bigr) \qquad (X' \in \mathcal{C}')$$

## 为什么成立（入边，证明在 proofs/）
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-reflective.md
- `def.ff-faithful` 忠实 / 满 / 全忠实：用到了定义 忠实 / 满 / 全忠实　proofs/def-dep.ff-reflective.md

## 它能推出什么 / 谁在用它
- 被 `prop.reflective-limits` 反射子范畴里的极限 用
- 被 `thm.sheafification` 层化 用
- 被 `prop.ind-reflective` C 是 Ind(C) 的反射子范畴 用

> 说明见 `notes/def.reflective-subcategory.md`
