# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

$$f = f\varphi + f(1 - \varphi),\qquad \operatorname{supp}(f\varphi) \subseteq U,\qquad \operatorname{supp}\big(f(1 - \varphi)\big) \subseteq V$$

（第一式：$\varphi$ 在 $X \setminus W$ 上为 $0$，故 $\operatorname{supp}(f\varphi) \subseteq K \cap \overline{W} \subseteq U$。第二式：$1 - \varphi$ 在开集 $N \supseteq K \setminus V$ 上为 $0$、在 $K$ 外 $f = 0$，故 $f(1 - \varphi)$ 在 $N \cup (X \setminus K)$ 上恒为 $0$，而剩下的 $K \setminus N$ 是**闭集**且含于 $V$，故 $\operatorname{supp}\big(f(1 - \varphi)\big) \subseteq V$）。两个函数都满足 $0 \le \cdot \le 1$，故

$$\Lambda(f) = \Lambda(f\varphi) + \Lambda\big(f(1 - \varphi)\big) \le \mu(U) + \mu(V).$$

对 $f$ 取上确界即得。∎

**引理 3（不交可加）**：若 $U \cap V = \emptyset$，则 $\mu(U \cup V) = \mu(U) + \mu(V)$。

> 续见 notes/thm.riesz-markov.4.md
