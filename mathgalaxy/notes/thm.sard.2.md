# Sard 定理　`thm.sard`　·　说明
根 `../`

⚠ **本节点只给证明提纲，不声称给出完整证明** —— 完整证明相当重（对 $m$ 归纳、Whitney 分解、外层用 Fubini 定理把零测性降维）。提纲与出处：
1. $m = 1$：对 $n$ 归纳，把 $U$ 切成可数多个小方块，在每个方块上把 $f$ 展成一阶 Taylor，用「临界点处 $Df(x) = 0$」把小方块的像控制住；
2. 一般 $m$：改用「临界点按 $\operatorname{rank}$ 分层」（Whitney 分解），每层用 Fubini 降到低维情形，再对 $\operatorname{rank}$ 归纳。
细节见 Milnor《Topology from the Differentiable Viewpoint》§3 与 Sternberg《Lectures on Differential Geometry》§II.3。∎
