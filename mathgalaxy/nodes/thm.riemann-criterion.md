# 可积的振幅判据　`thm.riemann-criterion`
定理（Riemann 判据）：可积 $\iff$ 振幅和可以任意小
layer 18 · 定理 · Riemann 积分 · 数学分析
[在星图里打开](../#n=thm.riemann-criterion)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上有界。则 $f$ 可积，当且仅当对每个 $\varepsilon > 0$ 都存在分割 $P$ 使

$$U(f, P) - L(f, P) = \sum_{i} \omega_i\,\Delta x_i < \varepsilon$$

（$\omega_i$ 是 $f$ 在第 $i$ 段上的振幅。）并且此时两种定义（标记和极限 / Darboux 确界）给出的积分值相同。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.integrable-examples`](../nodes/prop.integrable-examples.md) 哪些函数可积

- …另有出边，续页见 [nodes/thm.riemann-criterion.3.md](./thm.riemann-criterion.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.riemann-criterion.2.md](./thm.riemann-criterion.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6；Spivak, Calculus, Ch. 13

> 说明见 `notes/thm.riemann-criterion.md`

引用：`thm.riemann-criterion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
