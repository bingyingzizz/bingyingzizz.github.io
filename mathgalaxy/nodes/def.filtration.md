# 过滤　`def.filtration`
过滤
layer 18 · 定义 · 过滤与谱序列 · 同调代数
[在星图里打开](../#n=def.filtration)　·　[节点索引](../index.md)

设 $\mathcal{A}$ 是阿贝尔范畴。$M \in \mathcal{A}$ 上的（**递降**）**过滤**是 $M$ 的子对象沿 $(\mathbb{Z}, \ge)$ 的图：

$$\cdots \supseteq F^{n}M \supseteq F^{n+1}M \supseteq \cdots \supseteq M$$
> 陈述续见 [nodes/def.filtration.2.md](./def.filtration.2.md)


## 它能推出什么 / 谁在用它
- 被 [`prop.filtered-first-page`](../nodes/prop.filtered-first-page.md) 过滤复形的第一页 用

- …另有出边，续页见 [nodes/def.filtration.4.md](./def.filtration.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.filtration.3.md](./def.filtration.3.md)

refs: Weibel, An Introduction to Homological Algebra, Ch. 5 §5.4；Le Stum, An introduction to condensed mathematics, §7.2

## 说明
命题：$\mathbf{F}(\mathcal{C}(\mathcal{A})) \cong \mathcal{C}(\mathbf{F}(\mathcal{A}))$ —— **「带过滤」与「取复形」可以交换**。所以可以先把复形过滤好，再逐层算同调。

引用：`def.filtration`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
