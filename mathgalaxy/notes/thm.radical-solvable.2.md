# 根式可解 与 伽罗瓦群可解　`thm.radical-solvable`　·　说明
根 `../`

**引理（Kummer 一步）**：设 $F$ 含本原 $m$ 次单位根 $\zeta$，$E/F$ 是 $m$ 次循环扩张，则 $E=F(\beta)$ 且 $\beta^{m}\in F$。证明：取生成元 $\sigma$，把 $\sigma$ 看成 $F$-线性变换。$\sigma^{m}=1$，而 $x^{m}-1$ 在 $F$ 上分裂且无重根，故 $\sigma$ 可对角化；又 $\sigma$ 的阶为 $m$，故其特征值的阶的最小公倍数为 $m$，其中必有一个本原 $m$ 次单位根 $\zeta^{k}$。取对应的特征向量 $\beta$：$\sigma(\beta)=\zeta^{k}\beta$。于是 $\sigma(\beta^{m})=\beta^{m}$，$\beta^{m}$ 在 $\sigma$ 的固定域里；循环扩张的固定域恰为 $F$，故 $\beta^{m}\in F$。又 $\beta\notin F$（否则 $\sigma(\beta)=\beta$）。由于 $\zeta^{k}$ 本原，$\sigma^{d}(\beta)=\beta$ 当且仅当 $m\mid d$；故 $F(\beta)$ 的固定子群只含单位元，$[F(\beta):F]=m$，从而 $E=F(\beta)$。∎

> 续见 notes/thm.radical-solvable.3.md
