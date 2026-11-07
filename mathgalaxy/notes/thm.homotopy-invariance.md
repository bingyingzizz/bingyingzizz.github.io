# 同伦不变性　`thm.homotopy-invariance`　·　说明
根 `../`

**证明**：只需造一族同态 $P_{n} : S_{n}(X) \to S_{n+1}(Y)$，使 $\partial P_{n} + P_{n-1}\partial = g_{\#} - f_{\#}$；再引用 `def.chain-homotopy` 即得 $f_{*} = g_{*}$。下面把 $P_{n}$ 造出来并验证这条等式。

**棱柱与剖分。** 记 $\Delta^{n}$ 的顶点为 $e_{0}, \ldots, e_{n}$，把 $\Delta^{n} \times [0,1]$ 的顶点写成 $v_{j} := (e_{j}, 0)$、$w_{j} := (e_{j}, 1)$。把棱柱三角剖分成 $n+1$ 个 $(n+1)$-单纯形：对 $i = 0, \ldots, n$，令 $\tau_{i} : \Delta^{n+1} \to \Delta^{n} \times [0,1]$ 为把标准顶点依次送到

$$[v_{0}, \ldots, v_{i}, w_{i}, \ldots, w_{n}]$$

的仿射映射（第 $i$ 块）。对生成元 $\sigma : \Delta^{n} \to X$ 定义

$$P_{n}(\sigma) := \sum_{i=0}^{n} (-1)^{i}\, F \circ (\sigma \times \mathrm{id}) \circ \tau_{i},$$

再线性延拓到 $S_{n}(X)$。

> 续见 notes/thm.homotopy-invariance.2.md
