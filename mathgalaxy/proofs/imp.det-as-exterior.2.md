# 外幂的一维性 + 存在唯一性 $\implies$ 行列式就是那个系数
`imp.det-as-exterior` · 推出 · strong 边 · 根 `../`

`def.exterior-power` 外幂 + `thm.det-exists-unique` 行列式的存在唯一性 → `thm.det-as-exterior` 行列式 = 最高外幂上的作用

1. **$\bigwedge^{n}V$ 是一维的**：取 $V$ 的基 $e_1, \ldots, e_n$，则 $\{e_{i_1}\wedge\cdots\wedge e_{i_n}\}$ 中只有 $i_1, \ldots, i_n$ 互异的那些非零，即只有 $e_1 \wedge \cdots \wedge e_n$ 一个（差符号），故 $\dim \bigwedge^{n}V = 1$。
2. **一维空间上的线性映射就是乘一个数**：设 $\dim L = 1$、$\varphi : L \to L$ 线性，取 $0 \ne \ell \in L$，则 $\varphi(\ell) = c\,\ell$ 对某个 $c$；对任意 $t\ell$ 有 $\varphi(t\ell) = t\varphi(\ell) = tc\ell$，故 $\varphi$ 就是「乘 $c$」。
3. **定出那个数**：定义 $D(v_1, \ldots, v_n) := $ 满足 $T(v_1)\wedge\cdot

> 续见 proofs/imp.det-as-exterior.3.md
