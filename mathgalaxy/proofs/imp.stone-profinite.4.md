# Stone 空间 $\iff$ 投射有限空间
`imp.stone-profinite` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.profinite` 投射有限空间 + `prop.stone-reflective` Stone 空间是 CHaus 的反射子范畴 + `def.topology-base` 基与子基 → `thm.stone-profinite` Stone ⟺ 投射有限

由此得到连续映射 $S \to \varprojlim_{E} E$。它是**连续双射**：闭开集构成基保证任何两个单点都能被某个划分分开（单射），而满射性由每块都非空得到。紧空间到 Hausdorff 空间的连续双射是同胚，于是 $S \cong \varprojlim_{E} E$，即 $S$ 投射有限。∎

> 两头各用了一条前面的结论：正向用**闭开集构成基**（这是「全不连通 + 紧」的直接后果），反向用 **Stone 空间对极限封闭**。
