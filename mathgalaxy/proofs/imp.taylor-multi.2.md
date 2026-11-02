# 沿线段的中值定理迭代 $\implies$ 多元 Taylor 公式
`imp.taylor-multi` · 推出 · strong 边 · 根 `../`

`thm.mean-value-multi` 多元中值定理 → `thm.taylor-multi` 多元 Taylor 公式

**第三步：展开成多重指标。** 把 $D^{j}f(a)(h, \ldots, h)$ 按多重指标展开：$j$ 重线性型在 $(h, \ldots, h)$ 上的取值是

$$\sum_{|\alpha| = j} \binom{j}{\alpha} D^{\alpha} f(a)\, h^{\alpha} = j! \sum_{|\alpha| = j} \frac{D^{\alpha} f(a)}{\alpha!} h^{\alpha}$$

代入第二步即得节点里写的形式（余项同样按 $|\alpha| = k+1$ 展开）。

**第四步：估计余项。** 余项每项含 $k+1$ 个 $h$ 的分量，且 $D^{\alpha}f$ 在有界闭球上连续（故有界），于是 $|R_k(h)| \le C\|h\|^{k+1} = O(\|h\|^{k+1})$。∎

> ⭐ 关键在第 3 步：**$j$ 重线性型与多重指标导数之间差一个组合系数 $j!/\alpha!$** —— 这个系数正是把「$D^{j}f$ 是一个多线性型」翻译成「$\sum_{|\alpha|\le k}\frac{D^{\alpha}f}{\alpha!}h^{\alpha}$」的桥梁。
