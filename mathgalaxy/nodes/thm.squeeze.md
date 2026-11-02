# 夹逼定理　`thm.squeeze`
夹逼定理
layer 15 · 定理 · 实数与极限 · 数学分析
[在星图里打开](../#n=thm.squeeze)　·　[节点索引](../index.md)

**(数列版)** 设存在 $N_0$，使 $n \ge N_0$ 时 $a_n \le x_n \le b_n$。若 $a_n \to L$ 且 $b_n \to L$，则 $x_n \to L$。

**(函数版)** 设 $g(x) \le f(x) \le h(x)$ 在 $x_0$ 的某个去心邻域上成立。若

$$\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = L$$

则 $\lim_{x \to x_0} f(x) = L$。

## 为什么成立（入边，证明在 proofs/）
- [`def.sequence-limit`](../nodes/def.sequence-limit.md) 数列极限 + [`def.function-limit`](../nodes/def.function-limit.md) 函数极限：数列/函数极限的定义 $\implies$ 夹逼定理　[proofs/imp.squeeze.md](../proofs/imp.squeeze.md)

- …另有入边，续页见 [nodes/thm.squeeze.2.md](./thm.squeeze.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.squeeze.md`

引用：`thm.squeeze`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
