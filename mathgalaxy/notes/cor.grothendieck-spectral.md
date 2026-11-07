# Grothendieck 谱序列　`cor.grothendieck-spectral`　·　说明
根 `../`

⭐ **它的用处**：想算复合函子的导出函子 $R^{n}(G \circ F)$，可以**先算 $R^{q}F$、再算 $R^{p}G$**，中间用谱序列把两层的贡献拼起来。这是同调代数里最基本的「两步走」工具。

**证明（双复形 + 两个谱序列）。** 取 $M$ 的内射消解 $I^{\bullet}$，令 $A^{\bullet} := F I^{\bullet}$。
- 由假设，$I^{n}$ 内射，故 $FI^{n}$ 是 $G$-零调的，由 $F$ **左正合**得 $0 \to FM \to FI^{\bullet}$ 正合，所以 $A^{\bullet} = FI^{\bullet}$ 是 $FM$ 的右消解、且各项由 $G$-零调对象组成（⚠️ 这一步用的正是左正合；没有它，$FI^{\bullet}$ 只表示 $RF(M)$、未必消解 $FM$），于是 $R(G\circ F)M = G A^{\bullet}$ 在导出范畴里（Leray 零调性），即 $R^{n}(G\circ F)M = H^{n}(GA^{\bullet})$；

> 续见 notes/cor.grothendieck-spectral.2.md
