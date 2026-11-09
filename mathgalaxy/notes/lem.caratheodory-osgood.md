# Carathéodory–Osgood 边界对应　`lem.caratheodory-osgood`　·　说明
根 `../`

⚠️ **本节点仍标 skeleton**：定理是两条经典外部定理的合成（Carathéodory 连续延拓 + Osgood 边界单射）。本注把可独立验证的部分写全，并把外部定理陈述到位；它们的证明不在本图，因此不勾完成符号、不删 status。本节点是 `thm.boundary-correspondence`（仍 skeleton）与 `thm.schwarz-christoffel` 存在性 (i) 的共同上游。

**记号与目标**：$\Omega\subset\mathbb{C}$ 单连通真区域，$\partial\Omega$ 为 Jordan 曲线；$f:\Omega\to\mathbb{D}$ 为 Riemann 映射（存在性见 `thm.riemann-mapping`）。要证延拓 $\bar f:\\overline{\\Omega}\\to\\overline{\\mathbb{D}}$ 是同胚。

**第一步（外部定理 A：连续延拓，Carathéodory 1913）**：若 $\Omega$ 单连通且 $\partial\Omega$ 局部连通，则 $f$ 连续延拓到 $\overline{\Omega}$。Jordan 曲线是局部连通的连续统，故 A 适用；$\Omega$ 有界由 $\partial\Omega$ 紧性给出。标准证明走 crosscut / prime end（或调和测度），本图无这些节点，A 按外部定理引用。

> 续见 notes/lem.caratheodory-osgood.2.md
