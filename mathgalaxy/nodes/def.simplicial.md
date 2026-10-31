# 单纯对象　`def.simplicial`
单纯对象
layer 10 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.simplicial)　·　[节点索引](../index.md)

**单纯形范畴** $\Delta$ 的对象是

$$[0], \ [1], \ [2], \ \ldots, \ [n], \ \ldots$$

而 $[n] \to [m]$ 的态射取全体**单调映射**（不要求 $n \le m$，也不要求严格）。$\Delta$ 的全体态射由两类生成：

- **面映射** $\delta^{i} : [n-1] \to [n]$：跳过第 $i$ 个点（$i = 0, \ldots, n$）；
- **退化映射** $\sigma^{i} : [n] \to [n-1]$：重复第 $i$ 个点。

只保留面映射的子范畴记 $\Delta_{\mathrm{inj}}$，只保留退化映射的记 $\Delta_{\mathrm{surj}}$。$\mathcal{C}$ 中的**单纯对象**是图
> 陈述续见 [nodes/def.simplicial.2.md](./def.simplicial.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.simplicial.3.md](./def.simplicial.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.simplicial.4.md](./def.simplicial.4.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.simplicial.md`

引用：`def.simplicial`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
