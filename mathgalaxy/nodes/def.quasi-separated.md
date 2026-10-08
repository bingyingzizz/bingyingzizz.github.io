# 拟分离对象　`def.quasi-separated`
拟分离对象（Quasi-Separated Object）
layer 16 · 定义 · 拓扑斯 · 范畴论

拓扑斯 $\mathcal{T}$ 的对象 $X$ 叫**拟分离的**，如果任给 $Y \to X$、$Z \to X$（其中 $Y, Z$ 都拟紧），纤维积

$$Y \times_{X} Z$$

仍然拟紧。

## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-qs.md
- `def.quasi-compact` 拟紧对象：用到了定义 拟紧对象　proofs/def-dep.qc-qs.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定
- 被 `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定 用

> 说明见 `notes/def.quasi-separated.md`
