# Weingarten 变换　`def.weingarten-map`
Weingarten 变换（形状算子）
layer 25 · 定义 · 曲面论 · 微分几何
[在星图里打开](../#n=def.weingarten-map)　·　[节点索引](../index.md)

设 $e_{3} = n$。**Weingarten 变换**定义为 Gauss 映射微分的相反数：

$$W(v) := -\mathrm{d}n(v) = -\mathrm{d}e_{3}(v),\qquad W\colon T_{p}S \to T_{p}S .$$
> 陈述续见 [nodes/def.weingarten-map.2.md](./def.weingarten-map.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`lem.second-form-symmetric`](../nodes/lem.second-form-symmetric.md) 第二基本形式对称：系数对称 $\implies$ Weingarten 变换自伴　[proofs/imp.dg-Wselfadj.md](../proofs/imp.dg-Wselfadj.md)

- …另有入边，续页见 [nodes/def.weingarten-map.3.md](./def.weingarten-map.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.weingarten-map.4.md](./def.weingarten-map.4.md)

refs: do Carmo, Differential Geometry of Curves and Surfaces, 第 3 章「Gauss 映射的几何」· 形状算子与自伴性；陈维桓《微分几何讲义》, 「曲面的局部理论」· Weingarten 变换

> 说明见 `notes/def.weingarten-map.md`

引用：`def.weingarten-map`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
