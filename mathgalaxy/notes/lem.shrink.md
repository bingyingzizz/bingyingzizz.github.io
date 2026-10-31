# 收缩引理　`lem.shrink`　·　说明
根 `../`

**证明（对指标集良序化，逐个收缩）** 在 $I$ 上取一个良序（这里用到选择公理）。要造开集 $V_{i}$ 使 $\operatorname{cl} V_{i} \subseteq U_{i}$，同时保持覆盖。维护不变量：对每个 $i$，族
$$\mathcal{W}_{i} := \{\, V_{j} : j < i \,\} \cup \{\, U_{k} : k \ge i \,\}$$
都是 $X$ 的覆盖。
**后继步**（$i \to i^{+}$）：令 $A_{i} := X \setminus \bigcup \mathcal{W}_{i^{+}}$。$A_{i}$ 是**闭**集；而 $x \notin \mathcal{W}_{i^{+}}$ 意味着 $x \notin V_{j}$（$j < i$）且 $x \notin U_{k}$（$k > i$），不变量再把 $x$ 逼进 $U_{i}$ —— 所以 $A_{i} \subseteq U_{i}$。对不交闭集 $A_{i}$ 与 $X \setminus U_{i}$ 用正规性，得到开集 $V_{i}$ 使 $A_{i} \subseteq V_{i}$ 且 $\operatorname{cl} V_{i} \subseteq U_{i}$（「闭集含于开集，就能夹一个开集使它的闭包仍含于那个开集」是正规性的标准变形）。于是 $\mathcal{W}_{i^{+}}$ 仍覆盖 $X$。
**极限步**（$i$ 是极限序数）：设 $x \in X$。若 $x \in U_{k}$ 对某个 $k \ge i$ 成立，已被覆盖。否则 $x \notin U_{k}$ 对一切 $k \ge

> 续见 notes/lem.shrink.2.md
