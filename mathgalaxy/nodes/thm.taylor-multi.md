# 多元 Taylor 公式　`thm.taylor-multi`
定理：多元 Taylor 公式
layer 23 · 定理 · 多元微分 · 数学分析
[在星图里打开](../#n=thm.taylor-multi)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}$ 是 $C^{k+1}$，$a \in U$。则对 $h$ 充分小，

$$f(a + h) = \sum_{|\alpha| \le k} \frac{D^{\alpha} f(a)}{\alpha!}\, h^{\alpha} + R_k(h)$$

其中余项可写成（某个 $\theta \in (0,1)$）
> 陈述续见 [nodes/thm.taylor-multi.2.md](./thm.taylor-multi.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`thm.mean-value-multi`](../nodes/thm.mean-value-multi.md) 多元中值定理：沿线段的中值定理迭代 $\implies$ 多元 Taylor 公式　[proofs/imp.taylor-multi.md](../proofs/imp.taylor-multi.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.taylor-multi.3.md](./thm.taylor-multi.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Lang, Undergraduate Analysis, Ch. XVI

> 说明见 `notes/thm.taylor-multi.md`

引用：`thm.taylor-multi`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
