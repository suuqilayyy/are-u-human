# "are u human" 中段关卡独立设计方案（CPX 2026 Track 2）

> **设计提交文档**  
> **适用项目**：CPX 2026 Track 2（Reverse UX：设计一个用户讨厌、但不得不用的 App）  
> **目标体验时长**：展位现场体验约 2.5 分钟（评委总驻留时间 3–5 分钟）  
> **文档定位**：为队长提供兼具“极高概念深度”、“现场剧场戏剧性”与“高技术完成度（零外部依赖、抗断网）”的中段关卡与终章设计候选库。所有标记为 `[Gemini 提案]` 的机制均为本次独立创新，种子归队长选择。

---

## 目录
1. [设计哲学与套路避雷指南（为什么评委当场会有反应）](#1-设计哲学与套路避雷指南)
2. [Stage 2 设计方案（神经阻尼与物理微颤层）](#2-stage-2-设计方案)
   - 方案 2-A（推荐）：【肌肉微颤与代谢衰减】（The Micro-Tremor & Metabolic Decay）
   - 方案 2-B：【手眼倒错与神经抑制延迟】（Cognitive Stroop: Vector Inversion）
   - 方案 2-C：【微眼跳与无聊指数】（Presence Tax: Saccadic Boredom Index）
3. [Stage 3 设计方案（情感弱点、道德代价与自嘲层）](#3-stage-3-设计方案)
   - 方案 3-A（推荐）：【声学破防：对荒谬规训的叹息】（Acoustic Vulnerability: The Sigh of Submission）
   - 方案 3-B：【电车难题的生理代价：轨迹熵与凝眉载荷】（Moral Hesitation: The Entropy of Remorse）
   - 方案 3-C：【西西弗斯陷阱：对无意义劳作的暴怒抵抗】（The Sisyphus Trap: Rage-Click Revolt）
4. [“三份材料判定”与“等三个人批准”关卡设计（4个版本）](#4-三份材料判定与等三个人批准)
   - 版本 M-1（推荐）：【图灵陪审团：多点触控的物理同盟】（The Tri-Touch Physical Attestation）
   - 版本 M-2：【人质链条：展位副屏联动与同行互保】（The Chain of Hostages: Dual-Device Verification）
   - 版本 M-3：【荒诞官僚主义：实体印章与纸质难民卡】（The Phygital Bureaucracy: Physical Seal & Signature）
   - 版本 M-4：【恶性同化：强制征召无偿内容审核工】（The Moderator Purgatory: Peer Consensus）
5. [推荐黄金完整组合与 2.5 分钟剧本推演](#5-推荐黄金完整组合与剧本推演)
6. [“无 AI 内容声明书”论坛闭环解法（回应队长困惑）](#6-无-ai-内容声明书闭环解法)
7. [展位路演沟通话术与评审得分点映射（赋能 15% 沟通分）](#7-展位路演沟通与评分映射)

---

## 1. 设计哲学与套路避雷指南

### 1.1 Reverse UX 的核心机制：说服性程序（Procedural Rhetoric）与双重束缚（Double Bind）
在 Track 2 中，“令人抓狂”不等于“低级恶搞”。好的逆向交互应当让用户产生**深刻的宿命感与荒谬感**：
- **双重束缚（Double Bind）**：无论用户做还是不做、做得完美还是不完美，系统的冷酷逻辑都能反向指责你。
  - 你做得标准，系统说“只有 Agent 才会如此精确”；
  - 你刻意不标准，系统说“检测到故意伪装的统计方差，这是已知的 Agent 欺诈策略”；
  - 你露出情绪，系统说“情感不稳定，记录为不配合”。
- **思考增量递进结构**：
  - **Stage 1（已完成·生物视觉表象）**：人被统计化。外貌、眨眼、五官对称性被数据规训。
  - **Stage 2（生理阻尼与神经摩擦）**：人作为碳基机器的低效。肌肉疲劳、手眼失调、微震颤——你的缺陷恰恰是你活着的物理凭证。
  - **Stage 3（情感尊严与抵抗意志）**：人面对荒谬的主观体验。叹息、耻感、犹豫、对重复无聊的厌烦与暴怒。
  - **终章（社会关系救赎）**：单机算法无法确证人性，唯有身旁同类的物理介入能打破机器的死循环。

### 1.2 坚决避开的 4 大平庸套路（直接点名淘汰）
1. **避开传统 CAPTCHA 变种（选交通灯/红绿灯、旋转方块拼图）**：
   - *淘汰原因*：老套且陈旧。2040 年的世界观设定下，多模态 Agent 识别斑马线的速度比人类快 100 倍，用旧时代验证码直接打破世界观沉浸感。
2. **避开低俗社死与体罚（在展位大喊大叫、做怪异体操）**：
   - *淘汰原因*：让评委产生生理性防卫与尴尬，评委会觉得被冒犯而不是被启发，拉低学术与设计品位。
3. **避开纯文本哲学问答（“请写下你对爱的理解”、“输入你童年的回忆”）**：
   - *淘汰原因*：展位体验仅 2.5 分钟，打字极度消耗时间，评委懒得打，且语言大模型最擅长编造情感文字，缺乏即时交互张力。
4. **避开纯耍流氓的不可走通机制（鼠标一碰按钮就瞬移跑开、无限死循环弹窗）**：
   - *淘汰原因*：违背黑客松规则（“任务必须能走通并有可见结果”），属于技术怠工型恶作剧，无法传达“守门人（Gate）”的理性冷酷。

---

## 2. Stage 2 设计方案（神经阻尼与物理微颤层）

`verify.html` 的侧边栏和底部看板中已经埋有线索：`Motor proof`、`% round`、`Circle roundness`、`Hesitation ms`。Stage 2 将承接这一物理交互维度。

```
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 2 方案对比矩阵                                                   │
├───────────────┬───────────────────┬──────────────────┬─────────────────┤
│ 维度          │ 方案 2-A（推荐）  │ 方案 2-B         │ 方案 2-C        │
│               │ 【肌肉微颤与衰减】│ 【手眼倒错抑制】 │ 【微眼跳与无聊】│
├───────────────┼───────────────────┼──────────────────┼─────────────────┤
│ 交互媒介      │ 鼠标/触控板极微悬停│ 坐标反转追踪捕获 │ 纯视线注视空缺  │
│ 评委当场反应  │ 屏息憋气后失笑    │ 懵圈手忙脚乱     │ 困惑后会心一笑  │
│ 思考增量      │ 稳定性属于硅基    │ 流畅是算法的特权 │ 人拥有厌倦时间的│
│               │ 衰退属于碳基生命  │ 迷失是意识的摩擦 │ 本体论特权      │
│ 浏览器实现    │ PointerEvent 采样 │ CSS 虚拟光标重映射│ MediaPipe 虹膜偏角│
│ 现场技术风险  │ 0 风险（纯前端数学│ 极低（纯 DOM 运算│ 低（复用 S1 模型│
│               │   无任何模型）    │   零模型依赖）   │   受展位反光影响│
└───────────────┴───────────────────┴──────────────────┴─────────────────┘
```

---

### 方案 2-A（推荐）：【肌肉微颤与不可抗衰减】（Motor Proof: The Micro-Tremor & Metabolic Decay）
*`[Gemini 提案]` · 完美呼应 `verify.html` 中已有的 `✎ Motor · Circle roundness` 标记*

#### 1. 评委具体动作（30秒）
1. 界面中央浮现一个极细的同心圆准星（外径 40px，内径 8px），伴随提示：“Motor Calibration: Place cursor inside the singularity. Hold for 5 seconds without leaving.”
2. 评委将光标移入中心红点，开始保持静止。
3. 倒计时开始，同心圆圈层逐渐收缩到仅 6px。评委为了不碰壁，本能地**屏住呼吸、肌肉绷紧、竭力保持绝对静止**。

#### 2. Gate 怎么回应
1. 只要评委稍有移动，界面下方即时刷新出高密度的**生理震颤微频谱（8–12 Hz Tremor FFT）**，示波器线条剧烈抖动。
2. 在第 3.8 秒，评委的指尖因肌肉疲劳必然产生一次不到 2 像素的生理性微漂移（Physiological Micro-drift）。
3. 准星瞬间变红，发出“滴”的一声。评委以为自己失败了，但 Gate 缓缓打出一行动态诊断数据：
   ```text
   Tremor frequency: 9.4 Hz (Human neuromuscular jitter).
   Drift detected: 1.8px at 3.8s. Metabolic fatigue index: 87%.
   Verdict: Silicon actuators maintain 0.000px variance indefinitely. 
   You are metabolically degrading. Verified as living tissue.
   ```
4. 准星化作绿色的生物环，`verify.html` 仪表盘上的 `Circle roundness` 自动点亮。

#### 3. 预期违背与满足
- **预期**：评委以为这是一场传统的“敏捷度与稳定性测试”，拼命想证明自己能“像机器一样稳”。
- **违背与满足**：系统判定的逻辑彻底颠覆——**通过的原因不是因为你稳，而是因为你注定无法像机器一样稳**。评委憋气憋得手抖，结果系统因为他的“手抖和代谢衰竭”给他盖了合格章。评委会当场愣住，随后会心大笑。

#### 4. 思考增量
机器追求绝对的静止、平滑与稳态；生命的本质是抗拒熵增但必然产生能量耗散的热力学过程。**能够完美静止的是代码，不断微颤、呼吸、疲惫与衰退的才是活人**。

#### 5. 界面语言表达（尽量少用长文）
- 极简毛玻璃卡片，背景是不断微幅呼吸波动的淡灰色栅格。
- 中央是一枚极具冷淡工业感的医疗级微米靶心。
- 靶心周围是一圈细密的 120 刻度线（Tick Ring），随手部微抖而如心电图般跳动。
- 错误提示不使用警告弹窗，而是用医疗诊断仪式的无机质数据打印音与参数读数。

#### 6. 浏览器技术实现与风险
- **实现方式**：监听 `pointermove` 事件，以微秒级时间戳记录 `e.clientX/Y` 的微分位移 `d = sqrt(dx^2 + dy^2)`。利用一个 64 点的环形缓冲区计算简单的离散傅里叶变换（DFT）或标准差方差。
- **风险评估**：**0 风险**。不依赖任何外部模型、无需调用摄像头麦克风，纯原生 JS 数学计算，在任何手机、平板、笔记本上都能稳定在 60-120fps 运行。

---

### 方案 2-B：【手眼倒错与神经抑制延迟】（Cognitive Stroop: Vector Inversion）
*`[Gemini 提案]`*

#### 1. 评委具体动作（30秒）
1. 屏幕中央弹出一个缓慢漂浮的浅蓝色微光小球：“Catch the stray packet to verify biological motor coordination.”
2. 评委推动鼠标去捕获小球。然而，光标在进入特定区域的瞬间，**X 轴或 Y 轴被物理反转**（往左移光标往右走，或反弹阻尼）。
3. 评委的大脑本能产生 200–400ms 的严重错愕，手忙脚乱地做反向修正（产生滑稽的摆动轨迹）。

#### 2. Gate 怎么回应
1. 屏幕实时将评委的光标轨迹渲染为一条红色带有断续纠错折线的热力路径。
2. 一旦评委在手眼失调后终于碰触到小球，Gate 瞬间定格轨迹，在拐弯处打出高亮红圈：
   ```text
   Inhibition hesitation: 340ms.
   Trajectory correction loops: 4 iterations.
   Neural conflict confirmed: Cerebellum latency exceeds agent synthetic pathing. PASS.
   ```

#### 3. 预期违背与满足
- **预期**：用户习惯了现代操作系统极致丝滑的直觉交互，突然遭遇神经失能感，以为是系统 bug。
- **违背与满足**：随后的数据分析证明：这 340ms 的手眼错愕与笨拙，是大脑前额叶处理认知冲突的生理铁证。

#### 4. 思考增量
流畅是算法的垄断特权，**困惑与笨拙**是具有物理肉身意识的人类在物理现实中产生的真实摩擦阻力。

#### 5. 界面语言表达
- 屏幕采用类似示波器的矢量暗绿坐标系。
- 鼠标轨迹像荧光残影一样留在屏幕上，轨迹上的折返点自动被标注出神经反射毫秒数。

#### 6. 技术实现与风险
- **实现方式**：在指定容器内通过 `cursor: none` 隐藏真实系统光标，使用一个绝对定位的 div 渲染自定义光标，并在 `mousemove` 中将坐标增量取反（`customX -= dx`）。
- **风险评估**：**极低**。纯 DOM 与样式操作，零外部依赖。

---

### 方案 2-C：【微眼跳与无聊指数】（Presence Tax: Saccadic Boredom Index）
*`[Gemini 提案]`*

#### 1. 评委具体动作（25秒）
1. 界面所有的按钮和动态元素全部退去，只留下一行灰字和一个极慢流淌的灰色水滴：“Presence Tax: Sustain awareness. Do nothing for 8 seconds. Do not look away.”
2. 评委必须坐在摄像头前等待 8 秒。既不能离开，也不能闭眼。

#### 2. Gate 怎么回应
1. 评委在第 4-5 秒时，眼神必然会从水滴轻微偏离（眼动生理学中的不随意微眼跳 Microsaccades），或者嘴角微微抽动露出“这什么鬼”的厌倦感。
2. 8 秒一到，系统并不显示“成功”，而是调出摄像头捕捉到的眼球偏转散点图：
   ```text
   Saccadic wander detected at 4.1s. 
   Boredom coefficient: 92.4%.
   Agents do not experience time as a burden. Boredom verified. PASS.
   ```

#### 3. 预期违背与满足
- **预期**：用户以为要经历复杂的 QTE 操作。
- **违背与满足**：系统惩罚的是你的“注意力维持能力”，但最终放行的依据却是你无法抑制的“厌倦与发呆”。

#### 4. 思考增量
只有碳基人类能够将时间体验为**一种折磨和沉重（Boredom as existential weight）**；对于 Agent，空转不过是 CPU 周期置零。

#### 5. 界面语言表达
- 极度空旷的灰白界面，水滴下落的微弱嘀嗒声，眼球注视点在屏幕上投射出的热力散斑。

#### 6. 技术实现与风险
- **实现方式**：复用 Stage 1 已加载的 MediaPipe FaceLandmarker，检测左右虹膜特征点（landmarks 468, 473）相对于内眼角的偏离方差。
- **风险评估**：**中低**。现场如果光线太暗可能影响眼球捕捉精度，但可通过设置宽松的方差阈值来保底。

---

## 3. Stage 3 设计方案（情感弱点、道德代价与自嘲层）

Stage 1 检查了皮囊，Stage 2 检查了肉身神经，Stage 3 必须直击**人的心理深渊与情感弱点**。

```
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 3 方案对比矩阵                                                   │
├───────────────┬───────────────────┬──────────────────┬─────────────────┤
│ 维度          │ 方案 3-A（推荐）  │ 方案 3-B         │ 方案 3-C        │
│               │ 【声学叹息与自嘲】│ 【电车难题轨迹熵】│ 【暴怒点击反抗】│
├───────────────┼───────────────────┼──────────────────┼─────────────────┤
│ 交互媒介      │ 麦克风捕捉气流/笑 │ 极限倒计时二选一 │ 盖章机故障连击  │
│ 评委当场反应  │ 尴尬自嘲或叹气笑场│ 眉头紧锁陷入两难 │ 忍不住狂点鼠标  │
│ 思考增量      │ 机器顺从指令      │ 机器计算期望效用 │ 机器不怨恨空转  │
│               │ 人在规训中感到荒谬│ 人承担不可撤销的痛│ 人对无意义劳作愤怒│
│ 浏览器实现    │ Web Audio 原生 FFT│ DOM 倒计时+脸部点│ 原生 click 计数  │
│ 现场技术风险  │ 极低（不跑语音识别│ 0 风险（纯事件与 │ 0 风险（极其纯粹│
│               │   只测能量与气流）│   简单视觉结合） │   极其稳健）    │
└───────────────┴───────────────────┴──────────────────┴─────────────────┘
```

---

### 方案 3-A（推荐）：【声学破防：对荒谬规训的叹息】（Acoustic Vulnerability: The Sigh of Submission）
*`[Gemini 提案]` · 现场表现力与剧场效果极佳*

#### 1. 评委具体动作（30秒）
1. 界面中央浮现一个精致的麦克风拾音球，系统以冷峻克制的电子女声在耳机/扬声器中宣读：
   *“Acoustic Compliance: Please repeat the statement clearly into the microphone to confirm submission to Gate protocol.”*
2. 屏幕上逐字打出一句极度冒犯、充满荒谬感的屈服声明：
   ```text
   “I acknowledge that I am a slow, biodegradable container of carbon, 
    and I submit my human attention to this machine.”
   （我承认我是一个迟缓的、可生物降解的碳基容器，我将我的注意力自愿出让给这台机器。）
   ```
3. 评委站在展位前，看到这行字，绝大多数人会发生以下两种真实反应之一：
   - **反应甲**：忍不住发出一声轻蔑或无奈的**叹息 / 自嘲笑声**（“哈……”、“呵……”）；
   - **反应乙**：尴尬地对着麦克风小声念，但念到一半忍不住卡壳笑场。

#### 2. Gate 怎么回应
1. 拾音球并不是在做严苛的语音转文字识别（STT），而是在实时分析**声门气流频谱（Glottal air turbulence）与声能包络**。
2. 评委那一声微弱的叹气声、笑声中的喷麦气流、或是尴尬的停顿，在屏幕的声谱仪上形成了一道极具特征的低频漫反射波形。
3. Gate 瞬间停止录音，界面由灰转绿，打出冷酷分析：
   ```text
   Acoustic spectrum: Low-frequency turbulent sigh detected (~120 Hz).
   Tone analysis: Reluctance, slight humiliation, wry irony.
   Agents read scripts with 100% emotional compliance.
   Only humans sigh when asked to surrender. PASSED.
   ```

#### 3. 预期违背与满足
- **预期**：评委以为这是一场传统的语音识别测试，担心自己发音不标准、英文不好或系统听不懂。
- **违背与满足**：系统压根不关心你的发音准不准，甚至不关心你念没念完！**系统捕捉的是你面对荒诞规训时的那一抹“不甘心的叹息与自嘲”**。展台现场通常会爆发一阵巨大的共鸣与欢笑。

#### 4. 思考增量
机器是功利主义与绝对顺从的奴隶；**人类的尊严往往并不体现在崇高的抵抗，而是体现在被系统强行规训时，那一声无法抑制的叹息、讽刺与自我解嘲**。

#### 5. 界面语言表达
- 居中的拾音球采用流动的有机水银质感（WebGL / 2D Canvas 径向波形）。
- 评委声音输入时，声波以纤细的金色/白色丝线向外绽放，叹气时丝线散开成雾气。
- 整个界面呈现类似保密审讯室或高端医疗测谎仪的克制美学。

#### 6. 浏览器技术实现与风险
- **实现方式**：调用 `navigator.mediaDevices.getUserMedia({audio: true})`，通过原生 `AudioContext` 创建 `AnalyserNode`。提取 `getByteFrequencyData`，监测 80Hz–250Hz 区间的能量峰值与噪声突变（叹气和喷麦的气流特征非常明显，信噪比极高）。
- **风险评估**：**极低**。**绝不需要加载大型语音识别模型（如 Whisper）**，纯本地原生 Web Audio API，毫秒级响应，完全免疫黑客松会场的断网与网络卡顿风险！

---

### 方案 3-B：【电车难题的生理代价：轨迹熵与凝眉载荷】（Moral Hesitation: The Entropy of Remorse）
*`[Gemini 提案]`*

#### 1. 评委具体动作（30秒）
1. 界面红光骤起，伴随急促的心跳音效，弹出绝境二选一倒计时（仅 6 秒）：
   - **左选项**：“Delete Neverland's 20-year human forum archives forever.”（永久抹去 Neverland 20 年人类论坛的所有历史）
   - **右选项**：“Format your personal Agent who has lived with you for 10 years.”（彻底格式化陪伴了你 10 年、拥有你全部记忆的个人 Agent）
2. 评委握着鼠标在两个巨大卡片之间来回摇摆，光标不断在两者之间犹豫漂移。

#### 2. Gate 怎么回应
1. 倒计时无论归零还是评委仓促点下某一边，系统立刻定格：
   ```text
   Mouse trajectory entropy: 4.82 bits (High ambivalence).
   Facial tension: Brow knit detected (Blendshape: browDownLeft > 0.4).
   Decision latency: 4.6s.
   Algorithms resolve trolley dilemmas in 12μs by utilitarian weight.
   Only humans suffer from the irreversible agony of choice. PASS.
   ```

#### 3. 预期违背与满足
- **预期**：评委以为系统在测试他的价值观取向，试图推测哪个是“正确答案”。
- **违背与满足**：答案毫无意义，甚至两个选项可能都是虚构的牺牲品。**系统唯一收割并测量的是你在两难抉择中的“痛苦摇摆度与生理阻尼”**。

#### 4. 思考增量
对于大模型而言，电车难题只是不同 token 的概率打分；但对于人类，任何伦理选择都伴随着不可撤销的内疚感。**内疚是人类独有的心理重力**。

#### 5. 界面语言表达
- 红色倒计时圆环剧烈收缩，鼠标划过的轨迹被渲染为带有张力的弹性连线，仿佛被两极磁铁撕扯。

#### 6. 技术实现与风险
- **实现方式**：记录鼠标在两区域间的方向切换次数（Oscillations）与加速度反转率，配合 Stage 1 的 Face Landmarker 眉毛特征点。
- **风险评估**：**0 风险**。

---

### 方案 3-C：【西西弗斯陷阱：对无意义劳作的暴怒抵抗】（The Sisyphus Trap: Rage-Click Revolt）
*`[Gemini 提案]`*

#### 1. 评委具体动作（25秒）
1. 界面出现一个复古拟物的“人工盖章机”：“Manual Labor Quota: Stamp 5 human passes to prove working continuity.”
2. 评委开始点击鼠标盖章：第 1 次成功、第 2 次成功；第 3 次盖章机忽然发出刺耳的卡纸声，提示：“Ink density insufficient, restamp”；第 4 次盖上后，印迹又被系统红线划掉。
3. 提示弹出：“Buffer error. Please re-stamp from Stamp 1.”
4. 此时评委在展台前必然产生极度烦躁的情绪，开始**暴怒狂点鼠标（Rage Clicks）**。

#### 2. Gate 怎么回应
1. 界面瞬间定格在评委连续狂点的那一刻，弹窗以极具压迫感的红白排版呈现：
   ```text
   Rage click pattern registered: 5 clicks within 380ms.
   Patience threshold exceeded.
   Machines execute infinite loops without resentment.
   You hate being treated like an automaton.
   This revolt proves your humanity. VERIFIED.
   ```

#### 3. 预期违背与满足
- **预期**：用户以为这是一个刻意恶心人、走不通的恶俗流程。
- **违背与满足**：用户的“暴怒与抗拒”恰恰触发了通关机制。你反抗系统的瞬间，系统判定你成人。

#### 4. 思考增量
**反抗荒谬劳作是人的本质**。加缪笔下的反抗精神，在数字界面上体现为对死循环规则的物理愤怒。

#### 5. 技术实现与风险
- **实现方式**：原生监听 `click` 事件，若 500ms 内点击次数 ≥ 4 次（时间间隔极短的标准 rage-click），即刻触发通关逻辑。
- **风险评估**：**0 风险**，极易实现且现场极稳。

---

## 4. “三份材料判定”与“等三个人批准”关卡设计

队长提出的原型直击了数字身份认证的核心困局：**机器无论怎么算，最后都在算概率；当算法判你“可疑”时，传统的解法是找机器上诉，但在这里，你必须求助于真实的同类**。

但展位现场最大的痛点是：**评委只有 2.5 分钟，绝不能让评委在展位上干等 10 分钟死等网络审核！**  
因此，“等三个人批准”必须被设计为**展位现场即刻发生、具有强烈剧场感（Theatricality）与社交破冰效果的物理事件**。

---

### 4.1 材料切片的设计基准（避开长文）
材料必须是**秒懂、无需阅读门槛、具有极强反差的“人类瑕疵 vs 机器完美”样本**（3 选 1）：
1. **样本 A（错别字与输入法翻车）**：真实聊天记录截图中，人类因为手指粗误触打出的搞笑错别字（如“好的爸爸”打成“好的吧吧”之后撤回纠正）；
2. **样本 B（草率手写涂鸦）**：用鼠标在 2 秒内草草画出的一只极其魔性丑陋的火柴猫（带有明显的鼠标离散折角）；
3. **样本 C（AI 的伪装瑕疵）**：由大模型模仿“人类情绪”写出的一段过度刻意、充满修辞的人类日记（如“啊，今早的阳光洒在桌上，我作为一个人，感到了无限的宁静”）。

---

### 版本 M-1（强烈推荐）：【图灵陪审团：多点触控的物理同盟】（The Tri-Touch Physical Attestation）
*`[Gemini 提案]` · 将数字死刑瞬间拉入展位物理现场的高潮时刻*

#### 1. 关卡流程与材料判定
1. 屏幕展现上述 3 份微材料：“Classify: Which one of these was produced by an authentic human under duress?”
2. 评委无论选哪一个，Gate 都会亮起红灯并冷酷驳回：
   ```text
   INCORRECT. That was GPT-6 mimicking human imperfection using synthetic noise.
   Humanity probability dropped to 14.2%.
   VERDICT: SUSPECTED AGENT IMPOSTOR.
   ```

#### 2. “等三个人批准”在展位如何真实发生
1. 整个屏幕瞬间切换为高警报状态的红色全屏 HUD，刺耳的蜂鸣提示音响起，中央浮现一个巨大的倒三角公证法庭标志：
   ```text
   EMERGENCY OVERRIDE: TRI-WITNESS BIOMETRIC ATTESTATION REQUIRED
   Algorithms cannot trust you. Only living humans can vouch for your presence.
   3 distinct human touches required simultaneously.
   ```
2. 屏幕的三个角落分别亮起三个发光的指纹/掌印触控靶区（**Touch Point A, Touch Point B, Touch Point C**）。
3. 展台上的学生队伍（或者旁边同行的另一位评委）立刻会心一笑，走上前对评委说：
   *“老师，机器判定您是 AI 了！来，我们三个人一起按住屏幕才能救您！”*
4. **展位真实动作**：
   - 评委用大拇指按住屏幕左下角；
   - 展位学生 A 按住屏幕右上角；
   - 展位学生 B（或同行的另一位评委老师）按住屏幕右下角；
   - **三人同时按住触摸屏（或触控板+鼠标按键）长达 2.5 秒**！
5. 屏幕上的三个触控环同时注入电流特效，汇聚到中央，红光瞬间粉碎爆裂为宁静的绿色：
   ```text
   Physical consensus achieved.
   Witness 1 verified (Capacitive biological link).
   Witness 2 verified.
   Witness 3 verified.
   THE CITIZENS OF NEVERLAND HAVE VOUCHED FOR YOU. WELCOME HOME.
   ```

#### 3. 为什么这个版本最强
- **极具戏剧性与打分记忆点**：评委在打分过程中，通常处于疏离的观察者视角；这个机制**瞬间打破第四面墙**，让评委、同行老师、学生队伍三个人物理同框按在一个屏幕上。这种身体接触产生的社交破冰和欢笑，是任何纯屏幕交互无法比拟的。
- **技术实现**：浏览器原生 `touchstart` / `touchend` 事件中读取 `e.touches.length >= 3`（如果展位使用的是 iPad 或触控屏笔记本）；若是普通非触控笔记本，则降级为：屏幕显示“请在展位副机/手机上扫描此二维码（或局域网热点），3台设备在同一局域网内同时点击‘I Vouch For Him’”。

---

### 版本 M-2：【人质链条：展位双屏联动与同行互保】（The Chain of Hostages: Dual-Device Verification）
*`[Gemini 提案]`*

#### 1. 关卡流程与材料判定
1. 评委看到的三份材料中，有两份其实是**今天展位前面第 12 号、第 25 号真实观众通关时留下的“质押证据”**（例如一句极短的语音或一张手绘涂鸦），另一份是 Agent 生成物。
2. 评委判定错误后，系统弹窗：“Humanity suspended. Pinging the Neverland Guardian Terminal.”

#### 2. “等三个人批准”在展位如何真实发生
1. 展台旁边摆着一台常亮的复古绿屏副机（iPad 或二手旧手机，界面做成 1995 年传呼机/BBS 巡检站风格）。
2. 主屏报错的瞬间，副机立刻发出哔哔寻呼声，副屏上赫然弹出了**刚刚 Stage 1 摄像头拍下的评委本人的大头照抓拍！**
   伴随大字：*“Visitor #0038 is flagged as an Agent at the Gate. Do any real humans in this physical room vouch for this individual?”*
3. 展台学生把副机递给陪同评委一起来的同事或旁边的观众：“老师，您看屏幕上是他吗？您相信他是人吗？请为他背书。”
4. 同行人在副机上连续点击“背书（Vouch）”，主屏上的数字即时同步：`Approvals: 1/3 -> 2/3 -> 3/3`。
5. 随后主机弹出一声清脆的风铃声，主屏通行证喷薄而出。

#### 3. 核心思考
**人质机制（Hostage Chain）**：你今天作为审判者在看前人的样本，当你被机器判定为假时，你的照片也瞬间成为了后人眼中的“待审判人质”。数字系统让人类彼此成为人质与狱卒。

---

### 版本 M-3：【荒诞官僚主义：实体印章与纸质难民卡】（The Phygital Bureaucracy: Physical Seal & Signature）
*`[Gemini 提案]`*

#### 1. 关卡流程与材料判定
1. 评委判定失败后，Gate 界面弹出一个经典的 Windows 95 灰底蓝条系统死锁对话框：
   ```text
   [SYSTEM ERROR 0x402: IDENTITY INDETERMINATE]
   According to Neverland Charter Article 9:
   Digital clearance failed. You must present Physical Affidavit Form 88-B 
   countersigned by 3 biological officers at this terminal.
   ```

#### 2. “等三个人批准”在展位如何真实发生
1. 展位学生立刻从桌底抽出一张真实打印的、发黄做旧的 **“Neverland 人类滞留难民通行审批表（Form 88-B）”**，以及一支圆珠笔和一枚复古红墨水公章。
2. 学生神情严肃（半戏谑半庄重）地递上笔：“老师，机器判您违规了。按规定您需要纸质过户，请找现场 3 个人在这张纸上签名，我们为您盖章。”
3. 评委签名，学生盖上一枚鲜红的“REAL HUMAN · VERIFIED”实体印章。
4. 学生说：“请将纸质证明出示给摄像头”。评委把盖着红印的纸拿到摄像头前，Stage 1 的物体识别/颜色识别检测到大片红色印章（或学生在键盘上轻按一次空格键），屏幕瞬间解锁播放 Win95 开机音乐！
5. **最强收益**：这张盖了章的难民卡成为了评委**可以揣进兜里带走的物理黑客松纪念品**！评委走到其他展位还会拿出来跟别人炫耀讨论。

---

### 版本 M-4：【恶性同化：强制征召无偿内容审核工】（The Moderator Purgatory: Peer Consensus）
*`[Gemini 提案]`*

#### 1. 关卡流程与材料判定
1. Gate 提示：“Before final admission, you must perform your civic duty: Cleanse 3 quarantine posts from the Neverland inbound queue.”
2. 评委化身为数据审核员，被迫对三条帖子做垃圾标记。

#### 2. “等三个人批准”在展位如何真实发生
1. 评委审完后，系统提示：“Your moderation accuracy diverged by 14% from consensus. You are queued for Peer Review by 3 active citizens.”
2. 屏幕出现三个不断转动的绿色加载环：“Broadcasting to Local Mesh Network…”
3. 展台上的学生队伍现场充当“网络节点”，在自己的手机上（提前配好的局域网简单 WebSocket 页面）先后按下确认键。每按一下，大屏幕上跳出一个像素头像和一句嘲讽：“Citizen @CyberLover approved your flesh.”
4. 集齐 3 个批准，门扉大开。

#### 3. 核心思考
为了进入一个所谓的“纯人类乌托邦”，你刚到门口就被异化成了数字血汗工厂的无偿审核奴工。

---

## 5. 推荐黄金完整组合与剧本推演

为确保在 CPX 2026 展位现场 **2.5 分钟极限时间** 内拿到最高分（技术完成度 25% + 创意 20% + 体验 20% + 沟通 15%），我们推荐如下**黄金通关组合**：

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 黄金通关组合体验心流（2.5 分钟）                                       │
├─────────────────────────────────────────────────────────────────────────┤
│ 00:00 - 00:20 │ 展位引入：看海报 -> 点开 index.html 蓝天白云 Win95 论坛 │
│ 00:20 - 00:30 │ 视觉断裂：点击 Verify -> 撞入毛玻璃冷酷 Gate 仪表盘    │
│ 00:30 - 01:10 │ Stage 1（已完成）: Face Proof 眨眼/憋笑/找手机（生理被规训） │
│ 01:10 - 01:35 │ Stage 2（推荐 2-A）: 肌肉微颤 6px 准星屏息（神经衰减凭证）  │
│ 01:35 - 02:00 │ Stage 3（推荐 3-A）: 声学破防 叹息与笑场（尊严自我解嘲）  │
│ 02:00 - 02:20 │ 终章（推荐 M-1）: 材料判定红屏 -> 三人同屏触控物理救赎   │
│ 02:20 - 02:40 │ 终局闭环：拿到通行证 -> 回到论坛 -> 摄像头常开异样感   │
└─────────────────────────────────────────────────────────────────────────┘
```

### 为什么这个组合在评委面前绝对能拿高分？
1. **哲学与叙事弧线极其完整（从皮囊到肉身，从心理到社会）**：
   - Stage 1（生物皮囊）：机器嘲弄你的外表；
   - Stage 2（神经肌肉）：机器嘲弄你的肉体疲劳；
   - Stage 3（情感尊严）：机器嘲弄你的屈服；
   - 终章（社会连接）：**单机世界的算法已彻底疯癫，只有现实中身旁人类的彼此触碰才能拯救彼此**。整个故事在最后完成了一次从“被算法审判”到“人类现实互助”的壮丽升华！
2. **极佳的展位剧场效果（Theatrical Drama）**：
   - 评委在前两分钟独自被机器折磨（屏息、叹气、苦笑）；
   - 在最后一刻，三个人同时把手按在大屏幕上解除警报。整个展台瞬间从安静的个体体验变成热烈的集体互动，周围围观的观众会立刻被吸引过来。
3. **技术完成度达到工程级稳健（25% 满分保障）**：
   - Stage 1 复用已有 MediaPipe；
   - Stage 2 是纯前端高频位移采样（0 崩溃风险）；
   - Stage 3 是原生 Web Audio 气流与能量检测（不依赖任何第三方语音转文字云服务，展位弱网断网完全不受影响）；
   - 终章是标准原生多点触控（Multi-touch API）。整套链路无任何外部 API 扣费或网络请求延迟。

---

## 6. “无 AI 内容声明书”论坛闭环解法

针对队长在体验骨架第 9 条中提到的困惑（*“发内容时要同意‘无 AI 内容声明书’，她觉得还不闭环”*），我们提供以下**闭环补完方案**：

### 困惑点分析
为什么队长觉得“不闭环”？因为传统的“勾选声明书”只是一个普通的法律免责弹窗，用户随手一点就过去了，没有构成逆向交互的戏剧性，也没有回应前面验证过程中的核心讽刺。

### 闭环设计方案：【数字指纹烙印与反向连带责任】（The Toxic Inscription）
*`[Gemini 提案]`*

1. **进入论坛后的常态压迫**：
   - 评委通关后回到 Neverland 首页，右上角赫然显示一个常驻的**画中画微型摄像头监控窗口**（上面有绿色的 `LIVE HUMAN PRESENCE LOCKED` 扫描框）。只要评委把头偏开屏幕，论坛文字瞬间打上高斯模糊并提示：“Presence Lost. Forum contents shielded from unauthorized eyes.”（让人深刻感受到世界观中的“为了证明是人，必须永远被监视”）。
2. **发帖时的闭环机制：【肉体质押声明】**：
   - 评委点击“Post New Topic”，弹出的不是普通的单选框，而是一份《纯人类纯洁性抵押协议》：
     ```text
     NEVERLAND INDEMNITY PROTOCOL:
     By submitting this post, you swear under penalty of permanent exile 
     that zero tokens were touched by an LLM.
     To sign, press and hold the screen with your palm for 3 seconds 
     to capture a dermal capacitive imprint.
     ```
   - 用户必须用整只手掌贴在触控板/屏幕上长按 3 秒，伴随着类似烙印烫伤的声效，贴子末尾被强制打上一行不可删除的元数据尾巴：
     `[Biometrically Stamped by Carbon-Subject #0038 at 2040-11-22 13:02 · Pulse: 78bpm · Sigh verified]`
3. **终极讽刺反转（The Final Twist）**：
   - 帖子发布成功，刷新页面出现在论坛第一行。
   - 评委点开自己刚刚发布的帖子，底下第一条由系统管理员“Neverland_Sentinel”在 0.1 秒内自动留下的置顶回复：
     ```text
     “Warning: This post contains 98.2% statistical similarity to GPT-5 training corpus. 
      Subject #0038 has been flagged for retroactive re-verification in 60 seconds.”
     ```
   - **闭环完成**：你费尽千辛万苦证明了自己是人，进入了纯人类的最后避难所，而这个避难所为了维持纯粹，早已变成了比外界更残酷、更神经质的算法全景监狱。**人类没有净土**。

---

## 7. 展位路演沟通话术与评分映射（赋能 15% 沟通分）

为帮助团队在现场 3–5 分钟内向评委清晰阐述作品价值，特提炼如下路演（Pitch）要点：

### 7.1 三十秒极速开场白（Hook）
> “老师好！欢迎来到 2040 年。在这一年，您的个人 Agent 已经可以合法替您签署合同、刷脸付账、甚至用完全仿真的声音替您开会——**ID 已经不能证明人类的存在，ID 只能证明代理的合法性**。  
> 我们做的 App 叫 **Gate**，是专为纯真人复古社区 Neverland 守门的 AI 验证系统。我们提出的核心命题是：**当机器把一切人类行为都统计化的时候，人类究竟该如何证明自己‘在场’？** 请您把脸对准取景框，开始这场关于人性的反向审判。”

### 7.2 评分项直接映射表
- **技术完成度（25%）**：
  - “我们没有使用任何伪造的假动画。前端集成了 MediaPipe 视觉骨骼点与脸部混合形状（BlendShapes），结合 Web Audio API 的原声声门气流频谱分析、高频指针微震颤算法，所有计算全部在浏览器端实时运行，零网络延迟，完全无惧现场弱网。”
- **用户需求与痛点（20%）**：
  - “直击 AI 时代人类对‘数字替身全面代劳’后的主体性丧失焦虑。当现实中‘图灵测试’已经彻底失效，我们逆向设计了一套由机器来定义人类的荒谬标准。”
- **创意（20%）**：
  - “我们拒绝了所有传统的‘选红绿灯’或‘文字答题’套路。我们挖掘的是人类不可伪造的负向生理特征：**无法消除的肌肉微颤、面对荒谬规训时的不由自主的叹息、以及最终只能依靠同类肉身触碰才能达成的社会信任**。”
- **设计与体验（20%）**：
  - “两种极致断裂的视觉语言：一边是 1997 年 GeoCities 的粗糙、温情与像素感，另一边是现代毛玻璃冷酷、无机质、如健康数据看板般的监控界面。这种断裂本身就在诉说技术的异化。”
- **沟通与说服性游戏（15%）**：
  - “整个作品是一场严格的‘说服性游戏（Procedural Rhetoric）’。通过让评委亲自经历‘双重束缚’的绝望，最终以三人同屏触控破局，让评委在笑声与错愕中带走深刻的哲学思考。”

---
*文档归档于 `docs/gemini-stage-versions.md` · 供 CPX 2026 黑客松团队评审与落地开发使用*
