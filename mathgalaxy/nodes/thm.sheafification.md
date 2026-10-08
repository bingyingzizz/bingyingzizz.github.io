# 层化　`thm.sheafification`
层化：层范畴是预层范畴的反射子范畴
layer 18 · 定理 · 层与拓扑 · 范畴论

层范畴是预层范畴的**反射子范畴**，反射

$$\sharp : \widehat{\mathcal{C}} \longrightarrow \widehat{\mathcal{C}}, \qquad T \mapsto T^{\sharp}$$

叫 **sheafification**（层化）：对每个层 $F$，

$$\operatorname{Hom}_{\widehat{\mathcal{C}}}\bigl(T^{\sharp},\ F\bigr) \;\cong\; \operatorname{Hom}_{\widehat{\mathcal{C}}}\bigl(T,\ F\bigr)$$
> 陈述续见 `nodes/thm.sheafification.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cech-functor` Čech 函子 + `prop.cech-properties` Čech 函子的性质：Čech 函子做两次 $\implies$ 层化　proofs/imp.sheafification.md
- `def.cech-functor` Čech 函子：用到了定义 Čech 函子　proofs/def-dep.cech-sheafification.md
- `def.reflective-subcategory` 反射子范畴：用到了定义 反射子范畴　proofs/def-dep.reflective-sheafification.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.site-properties` site 的层范畴的好性质

> 说明见 `notes/thm.sheafification.md`
