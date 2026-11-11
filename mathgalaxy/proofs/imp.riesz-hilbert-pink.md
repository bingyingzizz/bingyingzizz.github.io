# 配对框架到 Hilbert 版 Riesz 表示（组织性回头边）
`imp.riesz-hilbert-pink` · 推出 · strong 边 · 根 `../`

`thm.riesz-perfect-pairing` Riesz 表示的配对版 → `thm.riesz-hilbert` Riesz 表示（Hilbert）

**组织性说明（非推导）。** `thm.riesz-perfect-pairing` 只给出完美配对框架，并把 Hilbert 内积配对列为实例：三条公理由 Cauchy–Schwarz 与非退化性验证。
它**不**推出满射性 $H^{*}\cong H$；满射性由 `thm.riesz-hilbert` 用投影定理/正交分解独立证明。
因此这条边表达「框架到实例」的回头关系（便于从框架跳到具体定理），不是从完美配对的三条公理单独推出满射，故 `layer: false`。

> 组织性回头边：配对定理只给框架；满射性仍由投影定理给出，不是从完美配对的三条公理单独推出。
