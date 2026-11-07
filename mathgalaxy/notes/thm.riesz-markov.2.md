# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

证明：取 $f \in C_{c}$，$0 \le f \le 1$，$K := \operatorname{supp} f \subseteq U \cup V$。$K \setminus V$ 是紧集且含于开集 $U$。由局部紧 Hausdorff 的正则性，取**相对紧**开集 $W$ 使 $K \setminus V \subseteq W \subseteq \overline{W} \subseteq U$（$\overline{W}$ 紧），再取开集 $N$ 使 $K \setminus V \subseteq N \subseteq \overline{N} \subseteq W$。取**单点紧化** $X^{+} = X \cup \{\infty\}$：$X$ 局部紧 Hausdorff $\Longrightarrow$ $X^{+}$ 紧 Hausdorff $\Longrightarrow$ $X^{+}$ 正规，故可在 $X^{+}$ 内对**闭集** $\overline{N}$ 与闭集 $X^{+} \setminus W$ 用 Urysohn 引理（`lem.urysohn`，要的是**正规**而非局部紧），得 $\varphi^{+} : X^{+} \to [0,1]$ 使 $\varphi^{+} = 1$ 于 $\overline{N}$、$\varphi^{+} = 0$ 于 $X^{+} \setminus W$。限制回 $X$ 得 $\varphi := \varphi^{+}|_{X} \in C_{c}(X)$，$\operatorname{supp} \varphi \subseteq \overline{W} \subseteq U$、且 $\varphi = 1$ 于 $N \supseteq K \setminus V$。于是

> 续见 notes/thm.riesz-markov.3.md
