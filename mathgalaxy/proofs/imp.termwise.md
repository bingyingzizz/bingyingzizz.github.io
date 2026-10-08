# MCT $\implies$ 逐项积分
`imp.termwise` · 推出 · strong 边 · 根 `../`

`thm.mct` 单调收敛定理 → `thm.termwise-integration` 逐项积分

**① 先看两项。** 由非负性，$\{f_1 \wedge  n\}$、$\{f_2 \wedge  n\}$ 都是简单函数列的极限（简单函数逼近定理），于是

$$\int (f_1 + f_2) = \lim_{n\to\infty} \int (\varphi_n + \psi_n) = \int f_1 + \int f_2$$

其中用到了 MCT（把 $f_{1} + f_{2}$ 写成极限）与简单函数积分的可加性 (b)。

**② 归纳到有限项。** 逐次用 ① 得到

$$\int \sum_{n=1}^{N} f_n = \sum_{n=1}^{N} \int f_n$$

**③ 让 $N \to \infty$。** 部分和 $\sum_{n\le N} f_n$ 是 $L^{+}$ 中的**递增**列，极限正是 $\sum_{n=1}^{\infty} f_n$。对部分和列用一次 MCT：

$$\int \sum_{n=1}^{\infty} f_n = \lim_{N\to\infty} \int \sum_{n=1}^{N} f_n = \lim_{N\to\infty} \sum_{n=1}^{N} \int f_n = \sum_{n=1}^{\infty} \int f_n$$

∎
