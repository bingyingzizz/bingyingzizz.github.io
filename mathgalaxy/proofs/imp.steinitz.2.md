# 线性无关与生成的定义 $\implies$ 交换引理
`imp.steinitz` · 推出 · strong 边 · 根 `../`

`def.vs` 向量空间的基 → `thm.steinitz` Steinitz 交换引理

1. 把 $v_1$ 用 $T$ 表出：$v_1 = \sum_j a_j w_j$。由 $v_1 \ne 0$（无关集不含零向量），某个 $a_j \ne 0$；重排下标设 $a_1 \ne 0$。
2. 于是 $w_1 = a_1^{-1}\bigl( v_1 - \sum_{j \ge 2} a_j w_j \bigr)$ 可由 $T' := (v_1, w_2, \ldots, w_m)$ 表出，所以 $T'$ 仍生成 $V$（$T$ 中每个元素都能用 $T'$ 表出，而 $V$ 由 $T$ 生成）。
3. 对 $S' := (v_2, \ldots, v_n)$ 与生成集 $T'$（$n - 1$ 与 $m$ 个元素）用归纳假设：得 $n - 1 \le m$，即 $n \le m + 1$，且可以从 $T'$ 中删 $n - 1$ 个换入 $S'$ 仍生成。
4. 合并第 2、3 步：从 $T$ 中删去 $w_1$ 与那 $n - 1$ 个，换入 $v_1, \ldots, v_n$，仍生成 $V$。

> 续见 proofs/imp.steinitz.3.md
