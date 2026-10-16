# L¹ 里的逼近　`thm.approximation-L1`
定理：$L^{1}$ 中可用简单函数 / 连续函数逼近
layer 20 · 定理 · 积分 · 分析学
[在星图里打开](../#n=thm.approximation-L1)　·　[节点索引](../index.md)

设 $f \in L^1(\mu)$。则对任意 $\varepsilon > 0$，存在简单函数 $\varphi = \sum_j a_j \chi_{E_j}$ 使

$$\int |f - \varphi| d\mu < \varepsilon$$

进一步，若 $\mu$ 是 **$\mathbb{R}$ 上的 Lebesgue–Stieltjes 测度**，还可以要求 $E_{j}$ 是开区间的有限并；甚至可以取一个**连续函数** $g$（在某个有界区间外恒为 0）使

$$\int |f - g| d\mu < \varepsilon$$

## 它能推出什么 / 谁在用它
- ⇒ [`cor.lusin`](../nodes/cor.lusin.md) Lusin 定理

- …另有出边，续页见 [nodes/thm.approximation-L1.3.md](./thm.approximation-L1.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.approximation-L1.2.md](./thm.approximation-L1.2.md)

refs: Folland, Real Analysis, Theorem 2.26

> 说明见 `notes/thm.approximation-L1.md`

引用：`thm.approximation-L1`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
