# 一致收敛　`def.uniform-convergence`
一致收敛 $f_n \rightrightarrows f$
layer 15 · 定义 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=def.uniform-convergence)　·　[节点索引](../index.md)

沿用上面的记号。称 $\{f_n\}$ **一致收敛**到 $f$，当且仅当

$$\forall \varepsilon > 0,\ \exists N,\ \forall n \ge N,\ \forall x \in X :\ |f_n(x) - f(x)| < \varepsilon$$

记 $f_n \rightrightarrows f$。等价说法（用上确界）：

$$\sup_{x \in X} |f_n(x) - f(x)| \xrightarrow{\;n \to \infty\;} 0$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.arzela-ascoli`](../nodes/thm.arzela-ascoli.md) Arzelà–Ascoli 定理

- …另有出边，续页见 [nodes/def.uniform-convergence.3.md](./def.uniform-convergence.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.uniform-convergence.2.md](./def.uniform-convergence.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 7

> 说明见 `notes/def.uniform-convergence.md`

引用：`def.uniform-convergence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
