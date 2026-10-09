# 连通范畴　`def.connected-category`
连通范畴（Connected Category）
layer 9 · 定义 · 图与极限 · 范畴论

范畴 $\mathcal{C}$ 叫**连通的**，如果对任意两个对象 $A, B \in \mathcal{C}$，都存在一条**有限锯齿**

$$A = X_{0} \longrightarrow X_{1} \longleftarrow X_{2} \longrightarrow \cdots \longleftarrow X_{n} = B,$$

或同样一条但箭头方向相反（$A = X_{0} \leftarrow X_{1} \to X_{2} \leftarrow \cdots \to X_{n} = B$）把 $A$ 与 $B$ 连起来。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.connected-functor.md

## 它能推出什么 / 谁在用它
- 被 `def.cofinal-functor` 共尾函子 用

> 说明见 `notes/def.connected-category.md`
