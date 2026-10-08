# 切片范畴是拉回　`prop.slice-cartesian`
切片范畴的方块是笛卡尔的
layer 13 · 命题 · 预层与米田 · 范畴论

对任取的一个预层，下面这个方块

$$\begin{array}{ccc} \mathcal{C}/T & \hookrightarrow & \widehat{\mathcal{C}}/T \\ \big\downarrow{\scriptstyle{j_{T}}} & & \big\downarrow \\ \mathcal{C} & \xrightarrow{\ h\ } & \widehat{\mathcal{C}} \end{array}$$

是**笛卡尔的**。上面是**切片范畴到预层范畴的嵌入**，下面是**范畴 $\mathcal{C}$ 到预层范畴的 Yoneda 嵌入** $h$（$h(X) = h_{X} = \operatorname{Hom}(-, X)$），两条竖边是两个遗忘函子。

## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-link.fibered-product-slice.md
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-slice.md

> 说明见 `notes/prop.slice-cartesian.md`
