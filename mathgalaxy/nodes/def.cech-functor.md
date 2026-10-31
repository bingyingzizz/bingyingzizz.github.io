# Čech 函子　`def.cech-functor`
Čech 函子（Čech Functor）
layer 16 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.cech-functor)　·　[节点索引](../index.md)

景 $\mathcal{C}$ 上的 **Čech 函子** $\widehat{H}$ 定义在预层上：

$$\widehat{H}(T)(X) \;:=\; \varinjlim_{R \in J(X)} \operatorname{Hom}(R, T)$$
> 陈述续见 [nodes/def.cech-functor.2.md](./def.cech-functor.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.sheaf`](../nodes/def.sheaf.md) 层：用到了定义 层　[proofs/def-dep.sheaf-cech.md](../proofs/def-dep.sheaf-cech.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.cech-functor.3.md](./def.cech-functor.3.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

## 说明
「沿越来越大的覆盖筛取极限」在 $T$ 这一侧翻成了余极限 —— 因为 $\operatorname{Hom}(-, T)$ 是**反变**的，反变函子沿滤子取极限等于共变函子的滤过余极限。$\widehat{H}$ 是把预层朝层的方向推一把的第一步。

引用：`def.cech-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
