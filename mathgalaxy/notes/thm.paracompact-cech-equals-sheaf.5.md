# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**② 缺口：软层无环（Godement）。** 仿紧 Hausdorff 上软层 $\mathcal{M}$ 满足 $H^{n}(X,\mathcal{M})=0$（$n \ge 1$）。它不能由 ① 直接得到：① 只说明「Čech 复形是消解」，而固定覆盖的 Čech 上同调并不等于导出函子上同调（反例见 ④）。标准路线两条：$n=1$ 用「软层使 $0 \to \mathcal{M} \to \mathcal{G} \to \mathcal{H} \to 0$ 的整体截面正合」——对局部有限闭加细 $\{A_{i}\}$ 作 Zorn 归纳：在闭并 $B$ 上已有提升 $s$，取 $A_{i} \not\subseteq B$，差 $s-s_{i} \in \mathcal{M}(B \cap A_{i})$ 由软性延拓为整体 $t$，在 $A_{i}$ 上改用 $s_{i}+t$，沿闭覆盖 $\{B,A_{i}\}$ 粘接，极大性给 $B=X$。$n \ge 2$ 的标准做法是改用 **Godement 消解**（每项松弛，松弛 $\implies$ 软）作维数转移。⚠ **本图未证的一步恰恰是这里**：若走内射消解 $0 \to \mathcal{M} \to \mathcal{I} \to \mathcal{Q} \to 0$，把 $\mathcal{Q}=\mathcal{I}/\mathcal{M}$ 当成松弛层直接向下归纳是**不成立**的 —— **松弛层

> 续见 notes/thm.paracompact-cech-equals-sheaf.6.md
