# 导数与极限交换　`thm.uniform-limit-derivative`
定理：导数与极限可交换（需要导数一致收敛）
layer 22 · 定理 · 函数列、幂级数与初等函数 · 分析学
[在星图里打开](../#n=thm.uniform-limit-derivative)　·　[节点索引](../index.md)

设 $f_n$ 在 $[a, b]$ 上可导、$f_n'$ 都连续，且

- $f_n' \rightrightarrows g$（**导数**一致收敛），
- 至少有一个点 $x_0$ 处 $f_n(x_0)$ 收敛。

则 $f_n$ 一致收敛到某 $f$，$f$ 可导，且

$$f' = g$$

也就是求导与取极限可以交换：$\bigl( \lim_n f_n \bigr)' = \lim_n f_n'$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.uniform-limit-derivative.2.md](./thm.uniform-limit-derivative.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.uniform-limit-derivative.3.md](./thm.uniform-limit-derivative.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 7

> 说明见 `notes/thm.uniform-limit-derivative.md`

引用：`thm.uniform-limit-derivative`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
