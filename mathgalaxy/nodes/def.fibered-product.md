# 纤维积 / 纤维余积　`def.fibered-product`
纤维积与纤维余积（Pullback / Pushout）
layer 12 · 定义 · 图与极限 · 范畴论

形状为 $X_1 \xrightarrow{f_1} X_0 \xleftarrow{f_2} X_2$ 的图的极限叫**纤维积**，记 $X_1 \times_{X_0} X_2$，也叫 $f_1$ 沿 $f_2$ 的**拉回**。它补成一个交换方块

$$\begin{array}{ccc} X_1 \times_{X_0} X_2 & \longrightarrow & X_2 \\ \downarrow & & \downarrow f_2 \\ X_1 & \xrightarrow{f_1} & X_0 \end{array}$$

这样的方块叫**笛卡尔的**。对偶地，图的余极限叫**纤维余积**，也叫**推出**。

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-fibered.md

## 它能推出什么 / 谁在用它
- 被 `prop.slice-cartesian` 切片范畴是拉回 用
- 被 `def.mono` 单态射 / 满态射 用
- 被 `def.subobject` 子对象 用
- 被 `prop.slice-cartesian` 切片范畴是拉回 用
- 被 `def.free-presentation` 自由表示 用
- 被 `def.pretopology` 预拓扑 用

> 说明见 `notes/def.fibered-product.md`

- …另有出边，续页见 `nodes/def.fibered-product.2.md`
