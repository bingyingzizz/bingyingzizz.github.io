# 拟紧对象　`def.quasi-compact`
拟紧对象（Quasi-Compact Object）
layer 15 · 定义 · 拓扑斯 · 范畴论
[在星图里打开](../#n=def.quasi-compact)　·　[节点索引](../index.md)

site $\mathcal{C}$ 的对象 $X$ 叫**拟紧的**，如果任给生成覆盖筛的族 $(X_{i} \to X)_{i \in I}$，都存在**有限**的 $J \subseteq I$，使 $(X_{i} \to X)_{i \in J}$ 生成的筛**也是**覆盖筛。
> 陈述续见 [nodes/def.quasi-compact.2.md](./def.quasi-compact.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.pretopos-qcqs`](../nodes/thm.pretopos-qcqs.md) 预拓扑斯由拓扑斯唯一确定

- …另有出边，续页见 [nodes/def.quasi-compact.4.md](./def.quasi-compact.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.quasi-compact.3.md](./def.quasi-compact.3.md)

refs: Le Stum, An introduction to condensed mathematics, §3.3

## 说明
这就是**紧性**在剥掉拓扑之后剩下的形状：**任何覆盖都有有限子覆盖**。紧 Hausdorff 空间在 $\mathrm{Cond}$ 里正是「拟紧」的那批对象 —— 后面凝聚态集的定义就是靠它写下来的，所以这个名字值得记牢。

引用：`def.quasi-compact`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
