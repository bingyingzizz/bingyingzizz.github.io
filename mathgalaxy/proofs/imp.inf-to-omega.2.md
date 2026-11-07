# 无穷公理 + 分离公理模式 $\implies \omega$ 存在
`imp.inf-to-omega` · 推出 · strong 边 · 根 `../`

`ax.inf` 无穷公理 + `ax.sep` 分离公理模式 → `thm.omega` 自然数集存在

4. $\omega$ 是归纳集：$\emptyset$ 属于每个归纳子集 $J \subseteq I$，故 $\emptyset \in \omega$；若 $x \in \omega$，则 $x$ 属于每个归纳子集 $J \subseteq I$，从而 $x \cup \{x\}$ 属于每个归纳子集 $J \subseteq I$，故 $x \cup \{x\} \in \omega$。
5. $\omega$ 含于一切归纳集：若 $K$ 是归纳集，则 $K \cap I$ 也是归纳集且 $K \cap I \subseteq I$，由 $\omega$ 的定义 $\omega \subseteq K \cap I \subseteq K$。

故 $\omega$ 是最小归纳集，即自然数集。∎
