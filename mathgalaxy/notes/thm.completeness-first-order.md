# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**约定**：$\vdash$ 取 `def.provability` 的 Hilbert 型系统（分离规则 + 推广），逻辑公理取标准模式：命题公理 (A1) $\psi\to(\chi\to\psi)$、(A2) $(\psi\to(\chi\to\theta))\to((\psi\to\chi)\to(\psi\to\theta))$、(A3) $(\neg\chi\to\neg\psi)\to(\psi\to\chi)$；量词公理 (Q1) $\forall x\,\psi\to\psi[t/x]$（$t$ 对 $x$ 可代入）、(Q2) $\forall x(\psi\to\chi)\to(\psi\to\forall x\,\chi)$（$x\notin\operatorname{FV}(\psi)$）；等词公理 (E1) $x=x$、(E2) $x=y\to(\psi\to\psi[y/x])$。`def.provability` 没有逐条列出公理表，这里按标准取法固定一套；换等价系统不改变 $\vdash$。$\Gamma$ **不一致**指存在 $\psi$ 使 $\Gamma\vdash\psi$ 且 $\Gamma\vdash\neg\psi$，它等价于 $\Gamma\vdash\neg(\theta\to\theta)$。

> 续见 notes/thm.completeness-first-order.2.md
