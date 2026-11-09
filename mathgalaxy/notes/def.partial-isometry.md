# 部分等距　`def.partial-isometry`　·　说明
根 `../`

**四个等价条件**（定义取 (3)）：

(1) $u$ 在 $(\ker u)^\perp$ 上是等距：对 $x \in (\ker u)^\perp$ 有 $\|u x\| = \|x\|$；

(2) $u = u\,u^*u$；

(3) $u^*u$ 是正交投影；

(4) $u\,u^*$ 是正交投影。

证明的骨架：若 (3) 成立，令 $P = u^*u$。则 $\|u x\|^2 = \langle u^*u x, x\rangle = \|P x\|^2$。正交投影 $P$ 的像是 $(\ker P)^\perp$，而 $\ker P = \ker u$，故在 $(\ker u)^\perp$ 上 $Px = x$，得 (1)。由 (1)，$u$ 与 $uP$ 在 $\ker u$ 上同为 $0$、在 $(\ker u)^\perp$ 上同为 $u$，得 (2)。(2) 两边取伴随得 $u\,u^* = (u\,u^*)^2$，且 $u\,u^*$ 自伴，故 (4)。对 $u^*$ 重复 (3)$\implies$(4) 得 (4)$\implies$(3)，四者等价。

**初始与最终投影**：$P = u^*u$ 的像是 $(\ker u)^\perp$（初始空间），$Q = u\,u^*$ 的像是 $\operatorname{im} u$（最终空间），且 $u$ 把 $P H$ 等距同构到 $Q H$。

⚠️ 单侧移位 $S(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)$ 是部分等距但不是酉算子：$S^*S = I$，而 $S\,S^* = I - \operatorname{proj}_{\ker(S^*)}$ 是投影（不是 $I$）。

> 续见 notes/def.partial-isometry.2.md
