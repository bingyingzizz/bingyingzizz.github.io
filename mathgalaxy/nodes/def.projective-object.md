# 投射 / 内射对象　`def.projective-object`
投射对象与内射对象（Projective / Injective Object）
layer 14 · 定义 · 紧 Hausdorff 空间 · 拓扑学

范畴 $\mathcal{C}$ 中对象 $P$ 叫**投射的**，如果函子 $h_{P} = \operatorname{Hom}_{\mathcal{C}}(P, -)$ **保持满态射**。对偶地，$I$ 叫**内射的**，如果 $h^{I}$ 把单态射送到满态射。

展开成提升条件就是：对每个满态射 $A \twoheadrightarrow B$ 与每个 $P \to B$，都存在提升 $P \to A$ 使三角形交换：

$$\begin{array}{ccc} & P & \\ \swarrow & \downarrow & \searrow \\ A & \twoheadrightarrow & B \end{array}$$
> 陈述续见 `nodes/def.projective-object.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.mono` 单态射 / 满态射：用到了定义 单态射 / 满态射　proofs/def-dep.mono-projective.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.gleason` Gleason 定理
- 被 `thm.gleason` Gleason 定理 用
- 被 `prop.free-projective` 自由紧 Haus 是投射对象 用
- 被 `prop.fchaus-pretopology` FCHaus 上的预拓扑 用

> 说明见 `notes/def.projective-object.md`

- …另有出边，续页见 `nodes/def.projective-object.3.md`
