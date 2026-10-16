# 长正合列　`thm.long-exact`
短正合列给出长正合列（蛇引理）
layer 16 · 定理 · 同调与正合列 · 同调代数
[在星图里打开](../#n=thm.long-exact)　·　[节点索引](../index.md)

设 $\mathcal{A}$ 是阿贝尔范畴，$0 \to K \to L \to M \to 0$ 是复形的短正合列。则存在**长正合列**

$$\cdots \to H^{n}(K) \to H^{n}(L) \to H^{n}(M) \xrightarrow{\ \delta\ } H^{n+1}(K) \to \cdots$$

其中 $\delta$ 叫**连接同态**。

推论：$H^{n} : \mathbf{K}(\mathcal{A}) \to \mathcal{A}$ 是**上同调函子**。

## 它能推出什么 / 谁在用它
- 被 [`thm.derived-long-exact`](../nodes/thm.derived-long-exact.md) 导出函子的长正合列 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.long-exact.2.md](./thm.long-exact.2.md)

refs: Le Stum, An introduction to condensed mathematics, §7.1–7.3

引用：`thm.long-exact`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
