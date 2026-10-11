# 扩展群 Ext　`def.ext`
扩展群 $\operatorname{Ext}^{n}$
layer 16 · 定义 · 复形与导出三角 · 同调代数

$L^{\bullet}$ 被 $K^{\bullet}$ 的**第 $n$ 个扩展群**是

$$\operatorname{Ext}^{n}(K^{\bullet}, L^{\bullet}) := \operatorname{Hom}_{D(\mathcal{A})}\bigl(K^{\bullet},\ L^{\bullet}[n]\bigr).$$

## 为什么成立（入边，证明在 proofs/）
- `def.derived-category` 导出范畴：用到了定义 导出范畴　proofs/def-dep.ext-dercat.md
- `def.distinguished-triangle` 导出三角：用到了定义 导出三角　proofs/def-dep.ext-triangle.md

## 它能推出什么 / 谁在用它
- 被 `prop.ext-is-rhom` Ext 就是 RHom 用
- 被 `lem.ext-stonean-section` Stonean 上 Ext 的截面公式 用
- 被 `prop.rhom-banach-discrete-zero` 有限维 Banach 到离散群全零 用
- 被 `prop.rhom-dual-tensor` 离散对偶的 RHom 与导出张量 用
- 被 `prop.dual-rhom-characterization` Pontryagin 对偶的 RHom 刻画 用
- 被 `thm.lc-ext-vanishing` 局部紧阿贝尔群高次 Ext 消失 用

- …另有出边，续页见 `nodes/def.ext.2.md`

refs: Le Stum, Definition 7.2.9

> 说明见 `notes/def.ext.md`
