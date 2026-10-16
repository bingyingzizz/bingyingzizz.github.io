# 积分与极限交换　`thm.uniform-limit-integral`
定理：一致收敛 $\implies$ 极限与积分可交换（Riemann 版）
layer 18 · 定理 · 函数列、幂级数与初等函数 · 分析学
[在星图里打开](../#n=thm.uniform-limit-integral)　·　[节点索引](../index.md)

设 $f_n$ 在 $[a, b]$ 上可积、$f_n \rightrightarrows f$。则 $f$ 可积，且

不但极限存在，而且可以给出误差估计：

$$\Bigl| \int_a^b f_n - \int_a^b f \Bigr| \le (b - a)\,\sup_{x} |f_n(x) - f(x)|$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.uniform-limit-integral.2.md](./thm.uniform-limit-integral.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 7

> 说明见 `notes/thm.uniform-limit-integral.md`

引用：`thm.uniform-limit-integral`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
