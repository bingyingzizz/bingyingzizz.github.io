# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**② 细层 $\implies$ 软层（Čech 项一般不是软层）。** 仿紧 Hausdorff 上局部有限覆盖配单位分解（`prop.paracompact-partition-unity`）。「细」有两种说法，这里把适用范围写清：**(a) $\mathcal C(X)$-模层**：局部有限覆盖 $\{V_{j}\}$ 上的单位分解 $\{\rho_{j}\}$（$\sum_{j}\rho_{j}=1$、$\operatorname{supp}\rho_{j}\subseteq V_{j}$）给出「乘以 $\rho_{j}$」的自同态，故 $\rho_{j}s_{j}$ 逐点有定义；**(b) 一般阿贝尔层**：改用 **endomorphism 分割** $\eta_{j}:\mathcal F \to \mathcal F$，$\operatorname{supp}\eta_{j}\subseteq V_{j}$、$\sum_{j}\eta_{j}=\operatorname{id}_{\mathcal F}$（局部有限和）。两种情形论证同形：设 $F \subseteq X$ 闭、$s \in \mathcal F(F)$；每个 $x \in F$ 有邻域 $U_{x}$ 与 $s_{x} \in \mathcal F(U_{x})$ 使 $s_{x}|_{F \cap U_{x}}=s$；把 $\{U_{x}\}_{x \in F} \cup \{X \setminus F\}$ 取局部有限加细 $\{V_{j}\}$ 并配上述 $\rho_{j}$ 或 $\eta_{j}$，再取 $s_{j} \in \mathcal F(V_{j})$ 为相应的局部截面（$V_{j} \subs

> 续见 notes/thm.paracompact-cech-equals-sheaf.4.md
